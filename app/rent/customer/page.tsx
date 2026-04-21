import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default function RentCustomerPage() {
  return (
    <PageShell
      title="Données client"
      description="Le client remplit ses données personnelles, ajoute son permis et accepte les conditions générales."
      backHref="/rent/vehicle"
    >
      <div className="step">
        <div className="form-grid">
          <div>
            <label className="label">Prénom</label>
            <input className="input" type="text" placeholder="Prénom" />
          </div>
          <div>
            <label className="label">Nom</label>
            <input className="input" type="text" placeholder="Nom" />
          </div>
          <div>
            <label className="label">E-mail</label>
            <input className="input" type="email" placeholder="email@exemple.ch" />
          </div>
          <div>
            <label className="label">Téléphone</label>
            <input className="input" type="tel" placeholder="+41 ..." />
          </div>
        </div>
        <div style={{ marginTop: 16 }}>
          <label className="label">Adresse privée</label>
          <textarea className="textarea" placeholder="Rue, NPA, ville"></textarea>
        </div>
        <div className="form-grid" style={{ marginTop: 16 }}>
          <div>
            <label className="label">Photo permis</label>
            <input className="input" type="file" />
          </div>
          <div>
            <label className="label">N° permis</label>
            <input className="input" type="text" placeholder="Numéro de permis" />
          </div>
        </div>
        <div className="notice">Le client devra confirmer avoir lu et accepté les conditions générales et la protection des données.</div>
        <div className="actions">
          <Link href="/rent/payment" className="button button-primary">Continuer vers paiement</Link>
        </div>
      </div>
    </PageShell>
  );
}
