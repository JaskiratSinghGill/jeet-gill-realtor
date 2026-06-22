import type { Metadata } from "next";
import Image from "next/image";
import { Award, MapPinned } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/site/reveal";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Jeet Gill, a Brampton-based Ontario realtor with HomeLife Miracle Realty serving Brampton, Mississauga, Caledon, Milton, and beyond.",
  openGraph: {
    title: "About Jeet Gill",
    description:
      "Professional real estate guidance for families across Ontario.",
  },
};

export default function AboutPage() {
  return (
    <main className="pt-16">
      <section className="container grid gap-12 py-20 md:grid-cols-[0.95fr_1.05fr] md:py-28">
        <Reveal>
          <div className="overflow-hidden rounded-lg bg-primary p-3 text-primary-foreground shadow-luxury">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-white">
              <Image
                src="/images/jeet-gill.jpg"
                alt="Jeet Gill, Ontario realtor"
                fill
                priority
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover object-[center_18%]"
              />
            </div>
            <div className="grid gap-4 p-5 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-primary-foreground/60">
                  Realtor profile
                </p>
                <p className="mt-3 text-4xl font-medium">Jeet Gill</p>
                <p className="mt-2 text-primary-foreground/60">
                  HomeLife Miracle Realty - Brampton
                </p>
              </div>
              <div className="relative h-14 w-44 overflow-hidden rounded-md bg-white">
                <Image
                  src="/images/homelife-logo-cropped.jpg"
                  alt="HomeLife Miracle Realty logo"
                  fill
                  sizes="176px"
                  className="object-contain p-2"
                />
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
            About Jeet
          </p>
          <h1 className="mt-4 text-5xl font-medium tracking-tight md:text-6xl">
            A personal, polished approach to Ontario real estate.
          </h1>
          <div className="mt-8 grid gap-5 text-lg leading-8 text-muted-foreground">
            <p>
              Jeet Gill is a real estate broker with an ABR designation, working
              with HomeLife Miracle Realty in Brampton and helping families make
              confident decisions across Ontario. His approach is measured,
              discreet, and deeply practical: understand the client first, then
              build the strategy around their timing, neighbourhood, and financial
              picture.
            </p>
            <p>
              From first-time buyers to move-up families and sellers preparing a
              high-impact launch, Jeet brings structure to moments that can often
              feel rushed. The experience is designed to feel calm, premium, and
              clear at every step.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <Award className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
                <p className="mt-6 text-2xl font-medium">Experience</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Pricing strategy, buyer representation, listing preparation,
                  negotiation, and Ontario market analysis.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <MapPinned className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
                <p className="mt-6 text-2xl font-medium">Background</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Brampton-based advisory with a family-first lens on schools,
                  commute access, lifestyle, and long-term value.
                </p>
              </CardContent>
            </Card>
          </div>
        </Reveal>
      </section>

      <section className="container py-20 md:py-28" aria-labelledby="contact-heading">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
              Private consultation
            </p>
            <h2 id="contact-heading" className="mt-4 text-4xl font-medium tracking-tight md:text-5xl">
              Start with a thoughtful conversation.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Share where you are in the process, and Jeet will help you clarify
              the best next step.
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
