import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="header">
      <div className="container nav">
        <Link className="brand brand-logo" href="/" aria-label="EasyLoc accueil">
          <Image src="/logo.jpg" alt="EasyLoc" width={220} height={58} priority />
        </Link>
        <nav className="nav-links">
          <Link href="/rent">Location</Link>
          <Link href="/choose-car">Choix voiture</Link>
          <Link href="/transport">Transport</Link>
          <Link href="/claim">Sinistre</Link>
        </nav>
      </div>
    </header>
  );
}
