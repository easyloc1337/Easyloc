import { PageShell } from "@/components/PageShell";

export default function ChooseCarPage() {
  return (
    <PageShell
      title="Choisis ta voiture"
      description="Module catalogue véhicule. Cette page pourra ensuite afficher les voitures disponibles, leurs photos, la catégorie et les conditions."
    >
      <div className="step">
        <h3>Catalogue véhicule</h3>
        <p>Cette page est volontairement simple pour la démo. Elle sera branchée ensuite sur les véhicules disponibles dans Odoo.</p>
      </div>
    </PageShell>
  );
}
