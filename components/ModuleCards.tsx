import Link from "next/link";
import { modules } from "@/lib/modules";

export function ModuleCards() {
  return (
    <div className="grid-4">
      {modules.map((module, index) => (
        <article
          className="card module-card luxe-module-card"
          key={module.href}
          style={{ animationDelay: `${0.22 + index * 0.12}s` }}
        >
          <div className="module-card-top">
            <div className="module-badge">0{index + 1}</div>
            <span className="module-mini-label">EasyLoc</span>
          </div>
          <h2>{module.title}</h2>
          <p>{module.description}</p>
          <Link className="card-link luxe-card-link" href={module.href}>
            Entrer dans ce module
          </Link>
        </article>
      ))}
    </div>
  );
}
