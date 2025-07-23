import { MainNav } from "@/components/main-nav";
import Image from "next/image";

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-neutral-gray">
      <MainNav />
      <main className="flex flex-col items-center justify-center px-4 py-20 md:py-32">
        <section className="bg-white rounded-3xl shadow-md max-w-6xl w-full p-8 md:p-12 text-center md:text-left animate-fade-in-up flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center items-center mb-6 md:mb-0">
            <Image
              src="/brian.jpeg"
              alt="Brian Gardner, Founder"
              width={220}
              height={220}
              className="rounded-2xl object-cover shadow-md"
              priority
            />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-4 text-center md:text-left">
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 mb-6">
              <span className="font-bold text-primary">Brian Gardner</span> grew
              up in South Jersey as a farmer, learning the value of hard work,
              honesty, and community from a young age. After years in
              construction, Brian saw a real need in the area for honest,
              reliable home inspections—so he started Pure Home Inspection LLC
              to fill that gap.
            </p>
            <p className="text-lg md:text-xl text-neutral-700 mb-6">
              Since <span className="font-bold">2018</span>, Brian has proudly
              served the South Jersey and Philadelphia area, helping customers
              protect their biggest investment—one home at a time. His mission
              is simple: provide clear, trustworthy inspections and peace of
              mind for every client.
            </p>
            <p className="text-base text-neutral-500 mt-8">
              Thank you for trusting Pure Home Inspection LLC with your home.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
