import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Home, KeyRound, MapPin, ShieldCheck, TrendingUp } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Luxury GTA Realtor in Brampton",
  description:
    "Jeet Gill helps families buy and sell homes across Brampton, Mississauga, Caledon, Milton, and the Greater Toronto Area.",
  openGraph: {
    title: "Jeet Gill | Luxury GTA Realtor",
    description:
      "A premium personal real estate advisory experience across Brampton, Mississauga, Caledon, and Milton.",
  },
};

const stats = [
  { value: "7+", label: "Years guiding GTA families" },
  { value: "180+", label: "Buyer and seller conversations annually" },
  { value: "12", label: "Communities monitored weekly" },
];

const services = [
  {
    icon: KeyRound,
    title: "Buy",
    copy: "Clear neighbourhood guidance, offer strategy, and a calm path from first showing to closing day.",
  },
  {
    icon: Home,
    title: "Sell",
    copy: "Positioning, presentation, pricing, and negotiation designed for a premium market impression.",
  },
  {
    icon: TrendingUp,
    title: "Invest",
    copy: "Rental fundamentals, resale potential, and location intelligence for long-term GTA growth.",
  },
];

const communities = ["Brampton", "Mississauga", "Caledon", "Milton"];

const testimonials = [
  {
    quote:
      "Jeet made our sale feel composed from day one. The prep, pricing, and communication were exactly what we needed.",
    name: "Amandeep & Harpreet",
    location: "Brampton sellers",
  },
  {
    quote:
      "We were moving from Mississauga to Milton and needed someone who could explain every tradeoff clearly. Jeet delivered.",
    name: "Priya S.",
    location: "Move-up buyer",
  },
  {
    quote:
      "The process felt premium but never intimidating. Every showing and offer discussion had a reason behind it.",
    name: "Daniel K.",
    location: "First-time buyer",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero-home relative min-h-screen overflow-hidden pt-16 text-white">
        <div className="absolute inset-0 luxury-grid opacity-20" />
        <div className="container relative grid min-h-[calc(100vh-4rem)] items-center gap-12 py-24 lg:grid-cols-[1fr_0.52fr]">
          <Reveal className="max-w-4xl">
            <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/75 backdrop-blur">
              HomeLife Miracle Realty - Brampton, Canada
            </p>
            <h1 className="text-balance text-6xl font-medium tracking-tight sm:text-7xl lg:text-8xl">
              Jeet Gill
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-xl leading-8 text-white/80 sm:text-2xl">
              Helping Families Buy & Sell Homes Across the Greater Toronto Area
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="#consultation">Book Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                <Link href="#valuation">Home Valuation</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="hidden lg:block">
            <div className="relative ml-auto max-w-sm">
              <div className="absolute -inset-4 rounded-lg border border-white/10 bg-white/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-lg border border-white/15 bg-white p-2 shadow-luxury">
                <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-white">
                  <Image
                    src="/images/jeet-gill.jpg"
                    alt="Jeet Gill, GTA realtor with HomeLife Miracle Realty"
                    fill
                    priority
                    sizes="384px"
                    className="object-cover object-[center_18%]"
                  />
                </div>
                <div className="absolute bottom-5 left-5 right-5 rounded-md bg-primary/90 px-4 py-3 backdrop-blur">
                  <p className="text-sm font-medium">Jeet Gill</p>
                  <p className="mt-1 text-xs text-white/70">
                    HomeLife Miracle Realty - Brampton
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container py-20 md:py-28" aria-labelledby="trust-heading">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
                Trust, quietly earned
              </p>
              <h2 id="trust-heading" className="mt-4 text-4xl font-medium tracking-tight md:text-5xl">
                Real estate guidance with polish, patience, and local depth.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <Card key={stat.label} className="bg-background/70">
                  <CardContent className="p-6">
                    <p className="text-4xl font-medium">{stat.value}</p>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-primary py-20 text-primary-foreground md:py-28" aria-labelledby="services-heading">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary-foreground/60">
              Services
            </p>
            <h2 id="services-heading" className="mt-4 text-4xl font-medium tracking-tight md:text-5xl">
              Three paths. One elevated standard.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.08}>
                <article className="h-full rounded-lg border border-white/10 bg-white/[0.04] p-7">
                  <service.icon className="h-6 w-6 text-primary-foreground/70" aria-hidden="true" />
                  <h3 className="mt-8 text-2xl font-medium">{service.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-primary-foreground/60">{service.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-28" aria-labelledby="communities-heading">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
              Featured communities
            </p>
            <h2 id="communities-heading" className="mt-4 text-4xl font-medium tracking-tight md:text-5xl">
              Local fluency across the west GTA.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Jeet tracks the school pockets, commute patterns, value shifts, and
              buyer psychology that shape family moves west of Toronto.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {communities.map((community, index) => (
              <Reveal key={community} delay={index * 0.06}>
                <article className="group rounded-lg border bg-card p-6 transition-colors hover:bg-secondary">
                  <MapPin className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                  <h3 className="mt-8 text-3xl font-medium">{community}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Buyer demand, seller timing, and neighbourhood-level strategy.
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-28" aria-labelledby="testimonials-heading">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
              Client words
            </p>
            <h2 id="testimonials-heading" className="mt-4 text-4xl font-medium tracking-tight md:text-5xl">
              Calm, clear, and deeply prepared.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.08}>
                <figure className="h-full rounded-lg bg-background p-7 shadow-luxury">
                  <blockquote className="text-lg leading-8">&quot;{item.quote}&quot;</blockquote>
                  <figcaption className="mt-8 text-sm text-muted-foreground">
                    <span className="block font-medium text-foreground">{item.name}</span>
                    {item.location}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="valuation" className="container py-20 md:py-28">
        <Reveal>
          <div className="grid gap-10 rounded-lg bg-primary p-8 text-primary-foreground md:grid-cols-[1fr_0.75fr] md:p-12">
            <div>
              <ShieldCheck className="h-7 w-7 text-primary-foreground/60" aria-hidden="true" />
              <h2 className="mt-8 text-4xl font-medium tracking-tight md:text-5xl">
                Curious what your home could command right now?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-primary-foreground/70">
                Get a pricing conversation built around your exact property,
                timing, upgrades, and comparable sales in your pocket of the GTA.
              </p>
            </div>
            <div className="flex items-end">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="#consultation">
                  Start a valuation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="consultation" className="container pb-24 md:pb-32" aria-labelledby="consultation-heading">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Building2 className="h-7 w-7 text-muted-foreground" aria-hidden="true" />
            <h2 id="consultation-heading" className="mt-8 text-4xl font-medium tracking-tight md:text-5xl">
              Let&apos;s make the next move feel considered.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Tell Jeet what you are planning. The first conversation is direct,
              private, and focused on your options.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <ContactForm />
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
