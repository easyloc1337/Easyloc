import Link from "next/link";
import { PageShell } from "@/components/PageShell";

const vehicles = [
  { name: "Fiat 500", type: "Citadine", price: "CHF 59 / jour" },
  { name: "Volkswagen Golf", type: "Compacte", price: "CHF 79 / jour" },
  { name: "BMW X1", type: "SUV", price: "CHF 119 / jour" },
];

export default function RentVehiclePage() {
  return (
    <PageShell
      title="Choix du véhicule"
      description="Le client choisit le véhicule qui correspond à son besoin."
      backHref="/rent/date"
    >
      <div className="steps">
        {vehicles.map((vehicle) => (
          <article className="step" key={vehicle.name}>
            <div className="step-top">
              <h3>{vehicle.name}</h3>
              <span className="card-link">{vehicle.price}</span>
            </div>
            <p>{vehicle.type}</p>
          </article>
        ))}
      </div>
      <div className="actions">
        <Link href="/rent/customer" className="button button-primary">Continuer</Link>
      </div>
    </PageShell>
  );
}
