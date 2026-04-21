import { PageShell } from "@/components/PageShell";

export default function TransportPage() {
  return (
    <PageShell
      title="Besoin d’un transport"
      description="Module de demande de transport ou de transfert. Il sera ensuite relié au formulaire métier et à la création du dossier dans Odoo."
    >
      <div className="step">
        <h3>Demande de transport</h3>
        <p>Cette page sert de base de démonstration. Le workflow détaillé sera ajouté selon tes étapes métier.</p>
      </div>
    </PageShell>
  );
}
