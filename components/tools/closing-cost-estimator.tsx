"use client";

import { useMemo, useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { currency } from "@/lib/utils";

export function ClosingCostEstimator() {
  const [price, setPrice] = useState(950000);
  const [legal, setLegal] = useState(2200);
  const [inspection, setInspection] = useState(650);
  const [adjustments, setAdjustments] = useState(1200);

  const landTransfer = useMemo(() => estimateOntarioLandTransferTax(price), [price]);
  const total = landTransfer + legal + inspection + adjustments;

  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Purchase price" value={price} onChange={setPrice} />
        <Field label="Legal and title estimate" value={legal} onChange={setLegal} />
        <Field label="Inspection estimate" value={inspection} onChange={setInspection} />
        <Field label="Adjustments buffer" value={adjustments} onChange={setAdjustments} />
      </div>
      <div className="rounded-lg bg-secondary p-6">
        <p className="text-sm text-muted-foreground">Estimated closing funds</p>
        <p className="mt-2 text-4xl font-medium">{currency(total)}</p>
        <dl className="mt-5 grid gap-2 text-sm text-muted-foreground">
          <div className="flex justify-between gap-4">
            <dt>Ontario land transfer tax placeholder</dt>
            <dd>{currency(landTransfer)}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>Legal, inspection, and adjustments</dt>
            <dd>{currency(legal + inspection + adjustments)}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

function estimateOntarioLandTransferTax(price: number) {
  const brackets = [
    { limit: 55000, rate: 0.005 },
    { limit: 250000, rate: 0.01 },
    { limit: 400000, rate: 0.015 },
    { limit: 2000000, rate: 0.02 },
    { limit: Infinity, rate: 0.025 },
  ];

  let remaining = price;
  let previousLimit = 0;
  let tax = 0;

  for (const bracket of brackets) {
    const taxable = Math.min(remaining, bracket.limit - previousLimit);
    if (taxable <= 0) break;
    tax += taxable * bracket.rate;
    remaining -= taxable;
    previousLimit = bracket.limit;
  }

  return tax;
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="grid gap-2">
      <Label>{label}</Label>
      <div className="relative">
        <span className="absolute left-4 top-3 text-muted-foreground">$</span>
        <Input
          type="number"
          value={value}
          step="100"
          onChange={(event) => onChange(Number(event.target.value))}
          className="pl-8"
        />
      </div>
    </div>
  );
}
