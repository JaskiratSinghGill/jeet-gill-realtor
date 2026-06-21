"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { CheckCircle2, Loader2, Send, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? "Please check the form and try again.");
      }

      setStatus("success");
      setMessage(
        result.mocked
          ? "Message validated. Add Resend keys to send real email."
          : "Your message has been sent. Jeet will follow up shortly.",
      );
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  return (
    <>
      <form onSubmit={onSubmit} className="grid gap-5" noValidate>
        <div className={compact ? "grid gap-5" : "grid gap-5 md:grid-cols-2"}>
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your full name" required minLength={2} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+1 (647) 893-1664" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell Jeet what you are planning: buying, selling, investing, or valuing a home."
            required
            minLength={10}
          />
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button type="submit" size="lg" disabled={status === "sending"}>
            {status === "sending" ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Send className="mr-2 h-4 w-4" />
            )}
            Send Message
          </Button>
          {message && status !== "success" ? (
            <p
              className={
                status === "error"
                  ? "text-sm text-destructive"
                  : "text-sm text-muted-foreground"
              }
              role="status"
            >
              {message}
            </p>
          ) : null}
        </div>
      </form>
      {status === "success" ? (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-primary/45 px-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-success-title"
        >
          <div className="w-full max-w-md rounded-lg border bg-background p-6 text-center shadow-luxury">
            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                setMessage("");
              }}
              className="ml-auto grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Close confirmation"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
            <div className="mx-auto mt-1 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground">
              <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
            </div>
            <h3 id="contact-success-title" className="mt-6 text-3xl font-medium tracking-tight">
              Message sent
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {message} You can also call Jeet directly at +1 (647) 893-1664.
            </p>
            <Button
              type="button"
              className="mt-6 w-full"
              onClick={() => {
                setStatus("idle");
                setMessage("");
              }}
            >
              Done
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
