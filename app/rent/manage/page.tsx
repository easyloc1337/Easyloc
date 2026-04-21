import { PageShell } from "@/components/PageShell";

export default function RentManagePage() {
  return (
    <PageShell
      title="Modifier une réservation"
      description="Connexion avec code de réservation et mot de passe pour modifier les dates ou le véhicule sous conditions."
      backHref="/rent"
    >
      <div className="step">
        <div className="form-grid">
          <div>
            <label className="label">Code de réservation</label>
            <input className="input" type="text" placeholder="EX-123456" />
          </div>
          <div>
            <label className="label">Mot de passe</label>
            <input className="input" type="password" placeholder="••••••••" />
          </div>
          <div>
            <label className="label">N° permis</label>
            <input className="input" type="text" placeholder="Numéro de permis" />
          </div>
        </div>
        <div className="notice">Règles prévues : 1er jour ok, dès le 2e jour 10% par jour jusqu’à 50%, puis modification impossible à moins de 48h.</div>
      </div>
    </PageShell>
  );
}
