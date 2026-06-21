"use client";

import { useMemo, useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { currency } from "@/lib/utils";

export function MortgageCalculator() {
  const [price, setPrice] = useState(950000);
  const [downPayment, setDownPayment] = useState(190000);
  const [rate, setRate] = useState(5.25);
  const [years, setYears] = useState(25);

  const result = useMemo(() => {
    const principal = Math.max(price - downPayment, 0);
    const monthlyRate = rate / 100 / 12;
    const payments = years * 12;
    const monthly =
      monthlyRate === 0
        ? principal / payments
        : (principal * monthlyRate * (1 + monthlyRate) ** payments) /
          ((1 + monthlyRate) ** payments - 1);

    return { principal, monthly };
  }, [downPayment, price, rate, years]);

  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Home price" value={price} onChange={setPrice} prefix="$" />
        <Field label="Down payment" value={downPayment} onChange={setDownPayment} prefix="$" />
        <Field label="Interest rate" value={rate} onChange={setRate} suffix="%" step="0.05" />
        <Field label="Amortization" value={years} onChange={setYears} suffix="years" />
      </div>
      <div className="rounded-lg bg-primary p-6 text-primary-foreground">
        <p className="text-sm text-primary-foreground/70">Estimated monthly payment</p>
        <p className="mt-2 text-4xl font-medium">{currency(result.monthly)}</p>
        <p className="mt-3 text-sm text-primary-foreground/60">
          Based on a {currency(result.principal)} mortgage before taxes,
          insurance, utilities, condo fees, and lender adjustments.
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  prefix,
  suffix,
  step = "1000",
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  prefix?: string;
  suffix?: string;
  step?: string;
}) {
  return (
    <div className="grid gap-2">
      <Label>{label}</Label>
      <div className="relative">
        {prefix ? <span className="absolute left-4 top-3 text-muted-foreground">{prefix}</span> : null}
        <Input
          type="number"
          value={value}
          step={step}
          onChange={(event) => onChange(Number(event.target.value))}
          className={prefix ? "pl-8" : suffix ? "pr-16" : ""}
        />
        {suffix ? <span className="absolute right-4 top-3 text-muted-foreground">{suffix}</span> : null}
      </div>
    </div>
  );
}
