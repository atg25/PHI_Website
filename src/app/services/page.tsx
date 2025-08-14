import Image from "next/image";
import Link from "next/link";
import { MainNav } from "@/components/main-nav";

const services = [
	{
		id: "buyers",
		name: "Buyers Home Inspection",
		icon: "/house-new.svg",
		summary: "Comprehensive evaluation for home buyers.",
		description: `Our most popular service, this inspection covers all major systems and components of the home. We provide a detailed digital report with photos and recommendations, so you can make an informed decision.`,
		process: [
			"Schedule your inspection at your convenience.",
			"On-site evaluation of structure, roof, electrical, plumbing, HVAC, and more.",
			"Receive a digital report with findings and next steps.",
		],
		features: [
			"Roofing, electrical, plumbing, HVAC",
			"Foundation, structure, and more",
			"Detailed digital report",
		],
		cta: "Schedule Inspection",
	},
	{
		id: "sellers",
		name: "Sellers Home Inspection",
		icon: "/sale-sign.svg",
		summary: "Pre-listing inspections for sellers.",
		description: `Identify issues before listing your home. Our pre-listing inspection helps you avoid surprises, increase buyer confidence, and sell faster.`,
		process: [
			"Book a pre-listing inspection.",
			"Inspector reviews all major systems and provides recommendations.",
			"Address issues before listing to maximize value.",
		],
		features: [
			"Identify issues before listing",
			"Increase buyer confidence",
			"Professional recommendations",
		],
		cta: "Book Pre-Listing",
	},
	{
		id: "termite",
		name: "Termite & WDI Inspection",
		icon: "/bug-new.svg",
		summary: "Wood-destroying insect inspections.",
		description: `Protect your investment from hidden threats. Our certified inspectors check for termites and other wood-destroying insects, providing peace of mind and required documentation for closings.`,
		process: [
			"Schedule a WDI inspection.",
			"Thorough check for termites and pests.",
			"Receive a certified report for your records.",
		],
		features: [
			"Termite and pest detection",
			"Certified reporting",
			"Peace of mind for buyers and sellers",
		],
		cta: "Request WDI Inspection",
	},
	{
		id: "mold",
		name: "Mold & Radon Testing",
		icon: "/bacteria.svg",
		summary: "Environmental safety for your home.",
		description: `Ensure your home is safe from hidden hazards. We offer mold inspection, air quality testing, and radon gas testing with certified lab results.`,
		process: [
			"Book mold/radon testing.",
			"Inspector collects samples and tests air quality.",
			"Receive certified lab results and recommendations.",
		],
		features: [
			"Mold inspection and testing",
			"Radon gas testing",
			"Certified lab results",
		],
		cta: "Book Environmental Test",
	},
	{
		id: "hud",
		name: "203K HUD Consultant",
		icon: "/clipboard-check-new.svg",
		summary: "FHA renovation loan consulting.",
		description: `We are certified 203K HUD consultants, guiding you through the FHA renovation loan process with inspections, documentation, and compliance support.`,
		process: [
			"Schedule a 203K consultation.",
			"Inspector reviews property and required repairs.",
			"Receive documentation for HUD compliance.",
		],
		features: [
			"203K loan inspections",
			"Consulting and documentation",
			"HUD compliance",
		],
		cta: "Start 203K Consultation",
	},
];

export default function ServicesPage() {
	return (
		<div className="min-h-screen bg-neutral-gray">
							<MainNav />
			<div className="bg-white rounded-b-3xl shadow-sm w-full">
			</div>
			<main className="space-y-24 pt-0 px-4 md:px-12">
				{/* Hero Section */}
				<section className="relative flex flex-col items-center justify-center text-center py-16 bg-white rounded-b-3xl overflow-hidden mb-6 w-full animate-fade-in min-h-[300px]">
					<h1 className="text-5xl md:text-6xl font-heading font-extrabold text-primary drop-shadow-lg mb-4">
						Our Home Inspection Services
					</h1>
					<p className="text-xl md:text-2xl text-neutral-700 max-w-2xl mx-auto mb-6">
						Comprehensive, honest, and certified inspections for every stage of home
						ownership. Explore our services below to find the right fit for your
						needs.
					</p>
					<div className="flex flex-wrap justify-center gap-4 mt-4">
						{services.map((service) => (
							<a
								key={service.id}
								href={`#${service.id}`}
								className="inline-block bg-accent-gold text-neutral-dark font-bold px-5 py-2.5 rounded-lg shadow hover:bg-primary hover:text-white transition-colors text-base animate-fade-in-up"
							>
								{service.name}
							</a>
						))}
					</div>
				</section>

				{/* Detailed Service Sections */}
				{services.map((service) => (
					<section
						key={service.id}
						id={service.id}
						className="py-16 bg-white rounded-3xl shadow-md mx-auto w-full max-w-4xl animate-fade-in-up space-y-8 px-4 md:px-12"
					>
						<div className="flex flex-col items-center text-center">
							<Image
								src={service.icon}
								alt={service.name + " icon"}
								width={64}
								height={64}
								className="mb-4"
							/>
							<h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-2">
								{service.name}
							</h2>
							<p className="text-lg text-neutral-700 mb-4">
								{service.description}
							</p>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div>
								<h3 className="text-xl font-bold text-primary mb-2">
									What's Included
								</h3>
								<ul className="list-disc list-inside text-neutral-800 space-y-1 text-left mx-auto max-w-xs">
									{service.features.map((feature, i) => (
										<li key={i}>{feature}</li>
									))}
								</ul>
							</div>
							<div>
								<h3 className="text-xl font-bold text-primary mb-2">
									Our Process
								</h3>
								<ol className="list-decimal list-inside text-neutral-800 space-y-1 text-left mx-auto max-w-xs">
									{service.process.map((step, i) => (
										<li key={i}>{step}</li>
									))}
								</ol>
							</div>
						</div>
						<div className="flex flex-col items-center mt-6">
							<Link
								href="/contact"
								className="inline-block bg-accent-gold text-neutral-dark font-bold text-lg px-8 py-4 rounded-lg shadow hover:bg-primary hover:text-white transition-colors animate-bounce-slow mb-2"
							>
								{service.cta}
							</Link>
						</div>
					</section>
				))}

				{/* FAQ Section (Optional) */}
				<section className="py-12 bg-white rounded-3xl shadow-md mx-auto w-full max-w-4xl animate-fade-in-up mt-10 px-4 md:px-12">
					<h2 className="text-2xl font-heading font-bold text-primary mb-6 text-center">
						Frequently Asked Questions
					</h2>
					<div className="space-y-6">
						<div>
							<h3 className="font-bold text-primary">
								How do I schedule an inspection?
							</h3>
							<p className="text-neutral-700">
								You can schedule online, call us at{" "}
								<a
									href="tel:6098201556"
									className="text-primary font-semibold"
								>
									(609) 820-1556
								</a>
								, or email{" "}
								<a
									href="mailto:purehomeinspectionllc@gmail.com"
									className="text-primary font-semibold"
								>
									purehomeinspectionllc@gmail.com
								</a>
								.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-primary">
								Are you licensed and insured?
							</h3>
							<p className="text-neutral-700">
								Yes, we are fully licensed, insured, and InterNACHI certified in New
								Jersey.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-primary">
								How soon will I get my report?
							</h3>
							<p className="text-neutral-700">
								Most reports are delivered the same day or within 24 hours of the
								inspection.
							</p>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="text-center py-12 space-y-4">
					<h2 className="text-2xl font-heading font-bold text-primary">
						Ready to Protect Your Investment?
					</h2>
					<p className="text-lg text-neutral-800">
						Contact us today to schedule your inspection or get a free quote.
					</p>
					<div className="mt-8">
						<Link
							href="/contact"
							className="inline-block bg-accent-gold text-neutral-dark font-bold text-lg px-8 py-4 rounded-lg shadow hover:bg-primary hover:text-white transition-colors animate-bounce-slow"
						>
							Schedule Your Inspection
						</Link>
					</div>
				</section>
			</main>
		</div>
	);
}
