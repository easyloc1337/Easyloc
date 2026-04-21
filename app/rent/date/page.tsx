import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default function RentDatePage() {
  return (
    <PageShell
      title="Sélection des dates"
      description="Première étape de réservation : le client choisit les dates de départ et de retour."
      backHref="/rent"
    >
      <div className="step">
        <div className="form-grid">
          <div>
            <label className="label">Date de départ</label>
            <input className="input" type="date" />
          </div>
          <div>
            <label className="label">Date de retour</label>
            <input className="input" type="date" />
          </div>
        </div>
        <div className="actions">
          <Link href="/rent/vehicle" className="button button-primary">Continuer</Link>
        </div>
      </div>
    </PageShell>
  );
}
