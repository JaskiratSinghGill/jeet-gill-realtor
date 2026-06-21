import type { Metadata } from "next";

import { AffordabilityCalculator } from "@/components/tools/affordability-calculator";
import { ClosingCostEstimator } from "@/components/tools/closing-cost-estimator";
import { MortgageCalculator } from "@/components/tools/mortgage-calculator";
import { Reveal } from "@/components/site/reveal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Buyer Tools",
  description:
    "Mortgage calculator, affordability calculator, and closing cost estimator for Ontario buyers in Brampton, Mississauga, Caledon, Milton, and beyond.",
  openGraph: {
    title: "Ontario Home Buyer Tools | Jeet Gill",
    description:
      "Estimate mortgage payments, affordability, and closing costs before your next Ontario real estate move.",
  },
};

export default function ToolsPage() {
  return (
    <main className="pt-16">
      <section className="container py-20 md:py-28">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Planning tools
          </p>
          <h1 className="mt-4 text-5xl font-medium tracking-tight md:text-6xl">
            Run the numbers before the showing.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Simple calculators for early planning. These are directional tools,
            not lending, legal, or tax advice.
          </p>
        </Reveal>
      </section>

      <section className="container grid gap-6 pb-24 md:pb-32">
        <Reveal>
          <Card>
            <CardHeader>
              <CardTitle>Mortgage calculator</CardTitle>
              <CardDescription>
                Estimate the monthly payment for an Ontario purchase.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <MortgageCalculator />
            </CardContent>
          </Card>
        </Reveal>

        <Reveal>
          <Card>
            <CardHeader>
              <CardTitle>Affordability calculator</CardTitle>
              <CardDescription>
                A simple income, debt, and down-payment estimate.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AffordabilityCalculator />
            </CardContent>
          </Card>
        </Reveal>

        <Reveal>
          <Card>
            <CardHeader>
              <CardTitle>Closing cost estimator</CardTitle>
              <CardDescription>
                Placeholder formulas for Ontario land transfer tax, legal fees,
                inspection, and adjustments.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ClosingCostEstimator />
            </CardContent>
          </Card>
        </Reveal>
      </section>
    </main>
  );
}
