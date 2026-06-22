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
            Ontario, including Brampton, Mississauga, Caledon, and Milton.
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
            <a
              href="https://maps.google.com/maps?vet=10CAAQoqAOahcKEwjg0p_fypmVAxUAAAAAHQAAAAAQDA..i&pvq=CgwvZy8xaGhseTA2bHgiHQoXSG9tZUxpZmUgTWlyYWNsZSBSZWFsdHkQAhgD&lqi=CipIb21lTGlmZSBNaXJhY2xlIFJlYWx0eSAtIEJyYW1wdG9uLCBDYW5hZGEiA4gBAUjctMCuvo-AgAhaQRAAEAEQAhgAGAEYAhgDIidob21lbGlmZSBtaXJhY2xlIHJlYWx0eSBicmFtcHRvbiBjYW5hZGEqCAgCEAAQARACkgEScmVhbF9lc3RhdGVfYWdlbmN54AEA&fvr=1&cs=0&um=1&ie=UTF-8&fb=1&gl=us&sa=X&ftid=0x882b3d0a5285dc29:0xd36285823ecd7eda"
              target="_blank"
              rel="noreferrer"
            >
              470 Chrysler Dr #20, Brampton, ON L6S 0C1
            </a>
            <a
              href="https://www.facebook.com/JeetGillCentury21"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/jeet11gill/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
