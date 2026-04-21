import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default function RentPaymentPage() {
  return (
    <PageShell
      title="Paiement"
      description="Dernière étape avant confirmation de réservation."
      backHref="/rent/customer"
    >
      <div className="step">
        <div className="form-grid">
          <div>
            <label className="label">Nom sur la carte</label>
            <input className="input" type="text" placeholder="Nom complet" />
          </div>
          <div>
            <label className="label">Numéro de carte</label>
            <input className="input" type="text" placeholder="•••• •••• •••• ••••" />
          </div>
          <div>
            <label className="label">Expiration</label>
            <input className="input" type="text" placeholder="MM/AA" />
          </div>
          <div>
            <label className="label">CVC</label>
            <input className="input" type="text" placeholder="123" />
          </div>
        </div>
        <div className="notice">Après paiement, un e-mail de confirmation devra être envoyé avec code de réservation, contrat et facture.</div>
        <div className="actions">
          <Link href="/rent" className="button button-primary">Confirmer la réservation</Link>
        </div>
      </div>
    </PageShell>
  );
}
