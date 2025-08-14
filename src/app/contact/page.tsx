"use client";

import React, { useRef, useState } from "react";
import { MainNav } from "@/components/main-nav";
// @ts-ignore: No types for emailjs-com
import emailjs from "emailjs-com";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_USER_ID,
} from "./emailjs.config";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    if (!formRef.current) return;
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_USER_ID
      )
      .then(
        () => {
          setStatus("success");
          setLoading(false);
          formRef.current?.reset();
        },
        () => {
          setStatus("error");
          setLoading(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-neutral-gray">
      <MainNav />
      <main className="flex flex-col items-center justify-center px-4 py-20 md:py-32">
        <section className="bg-neutral-50 rounded-3xl shadow-md max-w-xl w-full p-8 md:p-12 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-neutral-700 mb-2">
            Call{" "}
            <a href="tel:6098201556" className="text-primary font-semibold">
              (609) 820-1556
            </a>
          </p>
          <p className="text-lg text-neutral-700 mb-6">
            Email{" "}
            <a
              href="mailto:purehomeinspectionllc@gmail.com"
              className="text-primary font-semibold"
            >
              purehomeinspectionllc@gmail.com
            </a>
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 text-left mt-8"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-neutral-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label
                htmlFor="squareFootage"
                className="block text-sm font-medium text-neutral-700 mb-1"
              >
                House Square Footage
              </label>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                id="squareFootage"
                name="squareFootage"
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
              />
            </div>
            <div>
              <label
                htmlFor="yearBuilt"
                className="block text-sm font-medium text-neutral-700 mb-1"
              >
                Year Home Was Built
              </label>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                id="yearBuilt"
                name="yearBuilt"
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
              />
            </div>
            <div>
              <label
                htmlFor="extraComments"
                className="block text-sm font-medium text-neutral-700 mb-1"
              >
                Extra Comments
              </label>
              <textarea
                id="extraComments"
                name="extraComments"
                rows={2}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>
            {status === "success" && (
              <div className="text-green-600 text-center font-semibold mt-2">
                Message sent! We'll be in touch soon.
              </div>
            )}
            {status === "error" && (
              <div className="text-red-600 text-center font-semibold mt-2">
                Something went wrong. Please try again.
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-accent-gold text-neutral-dark font-bold py-3 rounded-lg shadow hover:bg-primary hover:text-white transition-colors text-lg disabled:opacity-60 disabled:cursor-not-allowed mt-4"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
