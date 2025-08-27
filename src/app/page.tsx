import { MainNav } from "@/components/main-nav";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-gray">
      <MainNav />
      <main className="space-y-24 pt-0 px-2 md:px-4">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center text-center py-0 bg-white rounded-b-3xl overflow-hidden mb-6 w-full animate-fade-in min-h-[350px] md:min-h-[500px]">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/hero.png"
              alt="Home Inspection Hero"
              fill
              style={{ objectFit: "cover" }}
              className="w-full h-full"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          </div>
          <div className="relative z-10 w-full mx-auto space-y-4 flex flex-col justify-center items-center px-4 py-20 md:py-32">
            <div className="w-full text-[2.5rem] md:text-[4rem] font-heading font-extrabold text-accent-gold drop-shadow-lg break-words">
              Pure Home Inspection LLC
            </div>
            <div className="w-full text-2xl md:text-3xl font-heading font-semibold text-white mt-2 break-words drop-shadow-md">
              Protect your investment with an in-depth and honest home
              inspection.
            </div>
            <div className="w-full text-lg text-white font-medium mt-2 break-words drop-shadow">
              Inspecting South Jersey one home at a time.
            </div>
          </div>
        </section>

        {/* Inspection Process Section */}
        <section className="py-12 bg-white rounded-3xl shadow-md mx-auto w-full max-w-9xl mb-10 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-center text-primary mb-4 drop-shadow-lg tracking-tight">
            The Pure Home Process
          </h2>
          <div className="text-lg md:text-xl text-neutral-800 max-w-3xl mx-auto text-center mb-6">
            We believe in thorough, honest, and transparent home inspections.
            Our process is designed to give you peace of mind and a clear
            understanding of your investment.
          </div>
          <div className="text-lg md:text-xl text-neutral-800 max-w-3xl mx-auto text-center mb-6">
            <span className="inline-block bg-accent-gold/20 border border-accent-gold rounded-xl shadow-lg px-6 py-3 mb-2 animate-fade-in-up">
              <a
                href="tel:609-820-1556"
                className="text-primary font-bold underline hover:text-primary-dark focus:outline-none"
              >
                Call Now
              </a>
              &nbsp;to schedule your inspection or learn more!
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl mb-2 text-accent-gold">1</div>
              <div className="font-bold text-primary text-lg mb-1">
                Schedule & Preparation
              </div>
              <div className="text-neutral-700">
                Book your inspection at your convenience. We confirm details and
                prepare for a comprehensive review of your property.
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl mb-2 text-accent-gold">2</div>
              <div className="font-bold text-primary text-lg mb-1">
                On-Site Inspection
              </div>
              <div className="text-neutral-700">
                We examine all major systems: roofing, structure, electrical,
                plumbing, HVAC, foundation, and more. We look for safety,
                function, and potential issues.
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl mb-2 text-accent-gold">3</div>
              <div className="font-bold text-primary text-lg mb-1">
                Detailed Digital Report
              </div>
              <div className="text-neutral-700">
                You receive a clear, illustrated digital report with photos,
                recommendations, and next steps—delivered promptly after the
                inspection.
              </div>
            </div>
          </div>
          <div className="mt-10 max-w-3xl mx-auto text-center">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
              Why Choose Pure Home Inspection LLC?
            </h3>
            <ul className="list-disc list-inside text-neutral-800 text-left inline-block mx-auto space-y-1">
              <li>Licensed, insured, and InterNACHI certified</li>
              <li>Unbiased, honest, and thorough inspections</li>
              <li>Clear communication and fast turnaround</li>
              <li>Locally owned and trusted in South Jersey</li>
              <li>Personalized service—your questions always answered</li>
            </ul>
          </div>
  </section>

        {/* Services Section */}
        <section className="py-16 bg-white animate-fade-in-up rounded-3xl shadow-md mx-auto max-w-9xl">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-center text-primary mb-4 drop-shadow-lg tracking-tight">
            Our Services
          </h2>
          <p className="text-xl md:text-2xl text-center text-neutral-700 mb-10 max-w-2xl mx-auto">
            Comprehensive inspections and consulting for every stage of home
            ownership.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto justify-center lg:justify-start">
              <Card className="h-full flex flex-col justify-between items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl group hover:bg-neutral-light border border-neutral-200 shadow-md hover:border-accent-gold animate-fade-in-up rounded-2xl">
                <CardHeader>
                  <Image
                    src="/house-new.svg"
                    alt="House icon"
                    width={48}
                    height={48}
                    className="mx-auto mb-2"
                  />
                  <CardTitle className="text-2xl font-bold text-primary mb-2">
                    Buyers Home Inspection
                  </CardTitle>
                  <CardDescription className="text-base text-neutral-700 mb-2">
                    Comprehensive evaluation for home buyers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-neutral-700 space-y-1 text-left mx-auto max-w-xs">
                    <li>Roofing, electrical, plumbing, HVAC</li>
                    <li>Foundation, structure, and more</li>
                    <li>Detailed digital report</li>
                  </ul>
                  <Link
                    href="/services"
                    className="inline-block mt-6 text-primary font-semibold hover:underline hover:decoration-4 hover:decoration-accent-gold transition-all duration-200 group-hover:text-primary-dark text-lg"
                  >
                    Learn More
                  </Link>
                </CardContent>
              </Card>
              <Card className="h-full flex flex-col justify-between items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl group hover:bg-neutral-light border border-neutral-200 shadow-md hover:border-accent-gold animate-fade-in-up delay-100 rounded-2xl">
                <CardHeader>
                  <Image
                    src="/sale-sign.svg"
                    alt="Sale sign icon"
                    width={48}
                    height={48}
                    className="mx-auto mb-2"
                  />
                  <CardTitle className="text-2xl font-bold text-primary mb-2">
                    Sellers Home Inspection
                  </CardTitle>
                  <CardDescription className="text-base text-neutral-700 mb-2">
                    Pre-listing inspections for sellers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-neutral-700 space-y-1 text-left mx-auto max-w-xs">
                    <li>Identify issues before listing</li>
                    <li>Increase buyer confidence</li>
                    <li>Professional recommendations</li>
                  </ul>
                  <Link
                    href="/services"
                    className="inline-block mt-6 text-primary font-semibold hover:underline hover:decoration-4 hover:decoration-accent-gold transition-all duration-200 group-hover:text-primary-dark text-lg"
                  >
                    Learn More
                  </Link>
                </CardContent>
              </Card>
              <Card className="h-full flex flex-col justify-between items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl group hover:bg-neutral-light border border-neutral-200 shadow-md hover:border-accent-gold animate-fade-in-up delay-200 rounded-2xl">
                <CardHeader>
                  <Image
                    src="/bug-new.svg"
                    alt="Insect icon"
                    width={48}
                    height={48}
                    className="mx-auto mb-2"
                  />
                  <CardTitle className="text-2xl font-bold text-primary mb-2">
                    Termite & WDI Inspection
                  </CardTitle>
                  <CardDescription className="text-base text-neutral-700 mb-2">
                    Wood-destroying insect inspections
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-neutral-700 space-y-1 text-left mx-auto max-w-xs">
                    <li>Termite and pest detection</li>
                    <li>Certified reporting</li>
                    <li>Peace of mind for buyers and sellers</li>
                  </ul>
                  <Link
                    href="/services"
                    className="inline-block mt-6 text-primary font-semibold hover:underline hover:decoration-4 hover:decoration-accent-gold transition-all duration-200 group-hover:text-primary-dark text-lg"
                  >
                    Learn More
                  </Link>
                </CardContent>
              </Card>
              <Card className="h-full flex flex-col justify-between items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl group hover:bg-neutral-light border border-neutral-200 shadow-md hover:border-accent-gold animate-fade-in-up delay-300 rounded-2xl">
                <CardHeader>
                  <Image
                    src="/bacteria.svg"
                    alt="Mold spore icon"
                    width={48}
                    height={48}
                    className="mx-auto mb-2"
                  />
                  <CardTitle className="text-2xl font-bold text-primary mb-2">
                    Mold & Radon Testing
                  </CardTitle>
                  <CardDescription className="text-base text-neutral-700 mb-2">
                    Environmental safety for your home
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-neutral-700 space-y-1 text-left mx-auto max-w-xs">
                    <li>Mold inspection and testing</li>
                    <li>Radon gas testing</li>
                    <li>Certified lab results</li>
                  </ul>
                  <Link
                    href="/services"
                    className="inline-block mt-6 text-primary font-semibold hover:underline hover:decoration-4 hover:decoration-accent-gold transition-all duration-200 group-hover:text-primary-dark text-lg"
                  >
                    Learn More
                  </Link>
                </CardContent>
              </Card>
              <Card className="h-full flex flex-col justify-between items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl group hover:bg-neutral-light border border-neutral-200 shadow-md hover:border-accent-gold animate-fade-in-up delay-400 rounded-2xl">
                <CardHeader>
                  <Image
                    src="/clipboard-check-new.svg"
                    alt="Checklist icon"
                    width={48}
                    height={48}
                    className="mx-auto mb-2"
                  />
                  <CardTitle className="text-2xl font-bold text-primary mb-2">
                    203K HUD Consultant
                  </CardTitle>
                  <CardDescription className="text-base text-neutral-700 mb-2">
                    FHA renovation loan consulting
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-neutral-700 space-y-1 text-left mx-auto max-w-xs">
                    <li>203K loan inspections</li>
                    <li>Consulting and documentation</li>
                    <li>HUD compliance</li>
                  </ul>
                  <Link
                    href="/services"
                    className="inline-block mt-6 text-primary font-semibold hover:underline hover:decoration-4 hover:decoration-accent-gold transition-all duration-200 group-hover:text-primary-dark text-lg"
                  >
                    Learn More
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials & Trust Signals */}
        <section className="py-12 bg-neutral-gray text-center animate-fade-in delay-200">
          <h2 className="text-2xl font-heading font-bold text-primary mb-6">
            What Our Clients Say
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <blockquote className="bg-white rounded-xl shadow p-6 text-lg text-neutral-800 font-medium">
              “Pure Home Inspection LLC was thorough, professional, and gave us
              peace of mind. Highly recommended!”
              <div className="mt-4 text-sm text-neutral-600">
                — J. Smith, Medford NJ
              </div>
            </blockquote>
            <blockquote className="bg-white rounded-xl shadow p-6 text-lg text-neutral-800 font-medium">
              “Prompt, honest, and detailed. The best inspection experience
              we’ve had.”
              <div className="mt-4 text-sm text-neutral-600">
                — L. Patel, Tabernacle NJ
              </div>
            </blockquote>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <span className="inline-block bg-primary text-white rounded-full px-3 py-1 text-xs font-bold">
                Licensed & Insured
              </span>
              <span className="inline-block bg-accent-gold text-neutral-dark rounded-full px-3 py-1 text-xs font-bold">
                NJ Lic. #24GI00155400
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block bg-white border border-primary text-primary rounded-full px-3 py-1 text-xs font-bold">
                InterNACHI Certified
              </span>
            </div>
          </div>
        </section>

        {/* Contact & Service Area */}
        <section className="text-center py-12 space-y-4">
          <h2 className="text-2xl font-heading font-bold text-primary">
            Schedule an Appointment or Call for an Instant Quote
          </h2>
          <p className="text-lg text-neutral-800">
            Call{" "}
            <a href="tel:6098201556" className="text-primary font-semibold">
              (609) 820-1556
            </a>{" "}
            or email{" "}
            <a
              href="mailto:purehomeinspectionllc@gmail.com"
              className="text-primary font-semibold"
            >
              purehomeinspectionllc@gmail.com
            </a>
          </p>
          <p className="text-neutral-700">
            Serving all of South Jersey, one home at a time.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block bg-accent-gold text-neutral-dark font-bold text-lg px-8 py-4 rounded-lg shadow hover:bg-primary hover:text-white transition-colors animate-bounce-slow"
            >
              Schedule an Inspection
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
