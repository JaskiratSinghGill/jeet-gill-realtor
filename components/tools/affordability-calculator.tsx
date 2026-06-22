"use client";

import { useMemo, useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { currency } from "@/lib/utils";

export function AffordabilityCalculator() {
  const [income, setIncome] = useState(180000);
  const [debts, setDebts] = useState(650);
  const [downPayment, setDownPayment] = useState(160000);
  const [rate, setRate] = useState(5.25);

  const result = useMemo(() => {
    const maxHousingPayment = income / 12 * 0.32;
    const adjustedPayment = Math.max(maxHousingPayment - debts, 0);
    const monthlyRate = rate / 100 / 12;
    const payments = 25 * 12;
    const mortgage =
      monthlyRate === 0
        ? adjustedPayment * payments
        : adjustedPayment *
          (((1 + monthlyRate) ** payments - 1) / (monthlyRate * (1 + monthlyRate) ** payments));

    return {
      maxHousingPayment,
      buyingPower: mortgage + downPayment,
    };
  }, [debts, downPayment, income, rate]);

  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Gross annual household income" value={income} onChange={setIncome} step="1000" min="0" />
        <Field label="Monthly debt payments" value={debts} onChange={setDebts} step="50" min="0" />
        <Field label="Available down payment" value={downPayment} onChange={setDownPayment} step="1000" min="0" />
        <Field label="Interest rate" value={rate} onChange={setRate} suffix="%" step="0.05" min="0" />
      </div>
      <div className="rounded-lg border bg-card p-6">
        <p className="text-sm text-muted-foreground">Estimated buying power</p>
        <p className="mt-2 text-4xl font-medium">{currency(result.buyingPower)}</p>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Uses a simplified 32% housing ratio and subtracts recurring monthly
          debt. Confirm approval details with a licensed mortgage professional.
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  suffix,
  step = "1",
  min,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  suffix?: string;
  step?: string;
  min?: string;
}) {
  return (
    <div className="grid gap-2">
      <Label>{label}</Label>
      <div className="relative">
        <span className="absolute left-4 top-3 text-muted-foreground">
          {suffix ? "" : "$"}
        </span>
        <Input
          type="number"
          value={value}
          step={step}
          min={min}
          onChange={(event) => {
            const next = Number(event.target.value);
            if (Number.isFinite(next)) onChange(next);
          }}
          className={suffix ? "pr-12" : "pl-8"}
        />
        {suffix ? <span className="absolute right-4 top-3 text-muted-foreground">{suffix}</span> : null}
      </div>
    </div>
  );
}
