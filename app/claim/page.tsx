import { PageShell } from "@/components/PageShell";

export default function ClaimPage() {
  return (
    <PageShell
      title="Gestion de ton sinistre"
      description="Module de déclaration et suivi du sinistre. Il sera ensuite connecté au dossier client, aux pièces jointes et au suivi interne."
    >
      <div className="step">
        <h3>Déclaration de sinistre</h3>
        <p>Cette page est préparée pour la démo. Nous pourrons ensuite y intégrer les formulaires, statuts et pièces jointes.</p>
      </div>
    </PageShell>
  );
}
