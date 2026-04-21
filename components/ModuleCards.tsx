import Link from "next/link";
import { modules } from "@/lib/modules";

export function ModuleCards() {
  return (
    <div className="grid-4">
      {modules.map((module, index) => (
        <article className="module-card" key={module.href}>
          <div className="module-card-num">0{index + 1}</div>
          <h2>{module.title}</h2>
          <p>{module.description}</p>
          <Link className="module-card-link" href={module.href}>
            Accéder →
          </Link>
        </article>
      ))}
    </div>
  );
}
