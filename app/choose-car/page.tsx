import Image from "next/image";
import Link from "next/link";
import type { Vehicle } from "@/app/api/vehicles/route";

async function getVehicles(): Promise<Vehicle[]> {
  try {
    const base = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
    const res = await fetch(`${base}/api/vehicles`, { cache: "no-store" });
    if (!res.ok) throw new Error("fetch failed");
    return res.json();
  } catch {
    return [];
  }
}

const FUEL_LABELS: Record<string, string> = {
  gasoline: "Essence",
  diesel: "Diesel",
  electric: "Électrique",
  hybrid: "Hybride",
  lpg: "GPL",
};

export default async function ChooseCarPage() {
  const vehicles = await getVehicles();

  return (
    <main className="container" style={{ paddingBottom: "80px" }}>
      <div className="page-hero">
        <Link className="page-back" href="/">← Retour</Link>
        <h1>Catalogue véhicules</h1>
        <p>
          {vehicles.length > 0
            ? `${vehicles.length} véhicule${vehicles.length > 1 ? "s" : ""} disponible${vehicles.length > 1 ? "s" : ""} — données synchronisées depuis Odoo.`
            : "Les véhicules sont synchronisés en temps réel depuis Odoo."}
        </p>
      </div>

      {vehicles.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "80px 24px",
            color: "var(--muted)",
            border: "1px dashed var(--border-2)",
            borderRadius: "var(--r-xl)",
          }}
        >
          <p style={{ fontSize: "2rem", marginBottom: "12px" }}>🔌</p>
          <p style={{ fontWeight: 700, color: "var(--text)", marginBottom: "6px" }}>
            Connexion Odoo non configurée
          </p>
          <p style={{ fontSize: "0.88rem" }}>
            Renseignez vos credentials dans <code>.env.local</code> pour afficher les véhicules.
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "16px",
          }}
        >
          {vehicles.map((v) => (
            <article
              key={v.id}
              className="module-card"
              style={{ gap: "0", padding: "0", overflow: "hidden" }}
            >
              {/* Photo */}
              <div
                style={{
                  width: "100%",
                  height: "180px",
                  background: "var(--surface-2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {v.image ? (
                  <Image
                    src={v.image}
                    alt={v.name}
                    width={400}
                    height={180}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    unoptimized
                  />
                ) : (
                  <span style={{ fontSize: "3rem", opacity: 0.4 }}>🚗</span>
                )}
              </div>

              {/* Infos */}
              <div style={{ padding: "20px 20px 18px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <div>
                  <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--white)", marginBottom: "2px" }}>
                    {v.brand}
                  </h2>
                  <p style={{ fontSize: "0.78rem", color: "var(--subtle)", fontWeight: 500 }}>
                    {v.plate}
                  </p>
                </div>

                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {[
                    { icon: "⛽", label: FUEL_LABELS[v.fuel] ?? v.fuel },
                    { icon: "💺", label: `${v.seats} places` },
                    { icon: "🎨", label: v.color },
                  ].map(({ icon, label }) => (
                    <span
                      key={label}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        padding: "3px 9px",
                        borderRadius: "999px",
                        background: "var(--surface-2)",
                        border: "1px solid var(--border)",
                        fontSize: "0.74rem",
                        color: "var(--muted)",
                      }}
                    >
                      {icon} {label}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "4px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.74rem",
                      padding: "3px 10px",
                      borderRadius: "999px",
                      background: "var(--accent-bg)",
                      border: "1px solid rgba(245,107,42,0.2)",
                      color: "var(--accent)",
                      fontWeight: 600,
                    }}
                  >
                    {v.status}
                  </span>
                  <Link
                    href={`/rent?vehicle=${v.id}`}
                    className="module-card-link"
                    style={{ fontSize: "0.82rem" }}
                  >
                    Réserver →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
