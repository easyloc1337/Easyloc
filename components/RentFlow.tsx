import Link from "next/link";
import { rentSteps } from "@/lib/modules";

export function RentFlow() {
  return (
    <div className="steps">
      {rentSteps.map((step) => (
        <article className="step" key={step.number}>
          <div className="step-top">
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
            </div>
            <Link className="card-link" href={step.href}>
              Ouvrir
            </Link>
          </div>
          <p>{step.text}</p>
        </article>
      ))}
    </div>
  );
}
