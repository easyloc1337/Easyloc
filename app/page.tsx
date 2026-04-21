import Link from "next/link";
import { ModuleCards } from "@/components/ModuleCards";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────── */}
      <section className="hero-wrap">
        <div className="hero-video-bg">
          <video autoPlay muted loop playsInline preload="auto" poster="/race-poster.jpg">
            <source src="/race-hero.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="hero-content">
          <span className="hero-badge">Plateforme de mobilité</span>
          <h1 className="hero-title">
            La location de voiture,<br />
            <em>tout simplement.</em>
          </h1>
          <p className="hero-subtitle">
            Réservez en quelques minutes, choisissez votre véhicule, gérez votre dossier — tout depuis une seule plateforme.
          </p>
          <div className="hero-actions">
            <Link href="/rent" className="btn btn-primary btn-lg">
              Réserver maintenant →
            </Link>
            <Link href="/choose-car" className="btn btn-ghost btn-lg">
              Voir les véhicules
            </Link>
          </div>
        </div>

        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          <span>Découvrir</span>
        </div>
      </section>

      {/* ── Stats + Modules ───────────────────────── */}
      <main style={{ position: "relative", zIndex: 1 }}>
        <div className="container section">

          {/* Stats */}
          <div className="stats-row">
            <div className="stat-cell">
              <div className="stat-number">1 200+</div>
              <div className="stat-label">Locations réalisées</div>
            </div>
            <div className="stat-cell">
              <div className="stat-number">48</div>
              <div className="stat-label">Véhicules disponibles</div>
            </div>
            <div className="stat-cell">
              <div className="stat-number">4,9 ★</div>
              <div className="stat-label">Note client moyenne</div>
            </div>
            <div className="stat-cell">
              <div className="stat-number">3 min</div>
              <div className="stat-label">Temps de réservation</div>
            </div>
          </div>

          {/* Modules */}
          <div className="section-header">
            <span className="section-label">Services</span>
            <h2 className="section-title">Tout ce dont vous avez besoin</h2>
            <p className="section-subtitle">
              Quatre modules pensés pour couvrir l'intégralité de votre parcours — de la réservation à la gestion des sinistres.
            </p>
          </div>
          <ModuleCards />
        </div>

        {/* ── Features ──────────────────────────── */}
        <div className="container" style={{ paddingBottom: "88px" }}>
          <div className="section-header">
            <span className="section-label">Pourquoi EasyLoc</span>
            <h2 className="section-title">Conçu pour aller vite</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Réservation en 3 minutes</h3>
              <p>Un workflow guidé étape par étape. Dates, véhicule, infos client et paiement — sans friction.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔗</div>
              <h3>Connecté à Odoo</h3>
              <p>Toute la gestion administrative (contrats, facturation, clients) se synchronise automatiquement avec votre Odoo.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📸</div>
              <h3>Check-in digitalisé</h3>
              <p>Photos du véhicule, état des lieux, signature électronique — tout est documenté avant le départ.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚨</div>
              <h3>Gestion des sinistres</h3>
              <p>Déclaration rapide d'incidents, suivi du dossier et envoi de pièces justificatives en quelques clics.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📧</div>
              <h3>Confirmation automatique</h3>
              <p>Contrat de location, facture et code de réservation envoyés par e-mail immédiatement après paiement.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3>Gestion des pannes</h3>
              <p>Un véhicule déclaré en panne est automatiquement retiré du catalogue de réservation.</p>
            </div>
          </div>
        </div>

        {/* ── Footer ────────────────────────────── */}
        <footer className="footer">
          <div className="container footer-inner">
            <span className="footer-copy">© 2025 EasyLoc — Tous droits réservés</span>
            <div className="footer-links">
              <Link href="/rent">Location</Link>
              <Link href="/choose-car">Catalogue</Link>
              <Link href="/transport">Transport</Link>
              <Link href="/claim">Sinistres</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
