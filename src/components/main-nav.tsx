"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const routes = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/our-story", label: "Our Story" },
  ];

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between w-full py-4 px-4 bg-white shadow-sm">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Pure Home Inspection Logo"
          width={120}
          height={60}
          priority
        />
      </Link>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className="text-base font-medium text-neutral-700 hover:text-primary-dark transition-colors"
          >
            {route.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="ml-4 px-6 py-2 rounded bg-accent-gold text-neutral-dark font-semibold shadow hover:scale-105 hover:bg-primary hover:text-white transition-all duration-150"
        >
          Schedule Inspection
        </Link>
      </div>
      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center">
        <button
          aria-label="Open menu"
          className="p-2"
          onClick={() => setIsOpen((v) => !v)}
        >
          <Menu className="h-6 w-6 text-primary" />
        </button>
        {isOpen && (
          <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg py-4 px-6 flex flex-col gap-4 z-50">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="text-base font-medium text-neutral-700 hover:text-primary-dark transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {route.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-6 py-2 rounded bg-accent-gold text-neutral-dark font-semibold shadow hover:scale-105 hover:bg-primary hover:text-white transition-all duration-150"
              onClick={() => setIsOpen(false)}
            >
              Schedule Inspection
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
