import { PageShell } from "@/components/PageShell";

export default function RentBreakdownPage() {
  return (
    <PageShell
      title="Panne véhicule"
      description="Déclaration simple d’une panne pour répondre rapidement et sortir le véhicule de la sélection."
      backHref="/rent"
    >
      <div className="step">
        <div className="form-grid">
          <div>
            <label className="label">Véhicule concerné</label>
            <input className="input" type="text" placeholder="Ex. BMW X1" />
          </div>
          <div>
            <label className="label">Date de la panne</label>
            <input className="input" type="date" />
          </div>
        </div>
        <div style={{ marginTop: 16 }}>
          <label className="label">Description du problème</label>
          <textarea className="textarea" placeholder="Décris la panne de façon simple et claire"></textarea>
        </div>
        <div className="notice">Quand cette panne est confirmée, le véhicule devra devenir non sélectionnable dans la liste.</div>
      </div>
    </PageShell>
  );
}
