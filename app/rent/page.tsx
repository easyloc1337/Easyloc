import { PageShell } from "@/components/PageShell";
import { RentFlow } from "@/components/RentFlow";

export default function RentPage() {
  return (
    <PageShell
      title="Loue une voiture"
      description="Parcours complet de réservation : dates, véhicule, données client, paiement, confirmation, modification et prise en charge."
    >
      <RentFlow />
    </PageShell>
  );
}
