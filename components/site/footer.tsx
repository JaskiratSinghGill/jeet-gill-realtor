import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="relative mb-6 h-16 w-56 overflow-hidden rounded-md bg-white">
            <Image
              src="/images/homelife-logo-cropped.jpg"
              alt="HomeLife Miracle Realty logo"
              fill
              sizes="224px"
              className="object-contain p-2"
            />
          </div>
          <p className="text-2xl font-medium">Jeet Gill</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-primary-foreground/70">
            A polished real estate advisory experience for families moving across
            Brampton, Mississauga, Caledon, Milton, and the Greater Toronto Area.
          </p>
          <p className="mt-4 text-sm text-primary-foreground/60">
            HomeLife Miracle Realty, Brampton, Ontario
          </p>
        </div>
        <div>
          <p className="text-sm font-medium">Explore</p>
          <div className="mt-4 grid gap-2 text-sm text-primary-foreground/70">
            <Link href="/about">About Jeet</Link>
            <Link href="/tools">Buyer Tools</Link>
            <Link href="/#valuation">Home Valuation</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium">Contact</p>
          <div className="mt-4 grid gap-2 text-sm text-primary-foreground/70">
            <a href="mailto:jeet11gill@gmail.com">jeet11gill@gmail.com</a>
            <a href="tel:+16478931664">+1 (647) 893-1664</a>
            <span>Brampton, ON</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
