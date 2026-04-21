import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="header">
      <div className="container nav">
        <Link className="brand-logo" href="/" aria-label="EasyLoc accueil">
          <Image src="/logo.jpg" alt="EasyLoc" width={180} height={46} priority />
        </Link>

        <nav className="nav-links">
          <Link href="/rent">Location</Link>
          <Link href="/choose-car">Catalogue</Link>
          <Link href="/transport">Transport</Link>
          <Link href="/claim">Sinistres</Link>
        </nav>

        <Link href="/rent" className="nav-cta">
          Réserver →
        </Link>
      </div>
    </header>
  );
}
