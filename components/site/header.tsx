import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/tools", label: "Tools" },
];

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3" aria-label="Jeet Gill home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
            JG
          </span>
          <span className="hidden text-sm font-medium tracking-wide sm:block">
            Jeet Gill
          </span>
          <span className="hidden h-8 w-px bg-border lg:block" aria-hidden="true" />
          <span className="relative hidden h-8 w-32 overflow-hidden rounded-sm bg-white lg:block">
            <Image
              src="/images/homelife-logo-cropped.jpg"
              alt="HomeLife Miracle Realty"
              fill
              sizes="128px"
              className="object-contain p-1"
            />
          </span>
        </Link>
        <nav aria-label="Primary navigation" className="flex items-center gap-1">
          {nav.map((item) => (
            <Button key={item.href} asChild variant="ghost" size="sm">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
          <Button asChild size="sm" className="ml-1 hidden sm:inline-flex">
            <Link href="/#consultation">Book Consultation</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
