import { RentWizard } from "@/components/RentWizard";

export const metadata = {
  title: "Réserver un véhicule — EasyLoc",
};

export default function RentPage() {
  return (
    <main style={{ paddingTop: "56px" }}>
      <div style={{ textAlign: "center", marginBottom: "40px", padding: "0 24px" }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "5px 14px",
            borderRadius: "999px",
            background: "var(--accent-bg)",
            border: "1px solid rgba(245,107,42,0.22)",
            color: "var(--accent)",
            fontSize: "0.78rem",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          Location
        </span>
        <h1
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            color: "var(--white)",
            marginBottom: "10px",
          }}
        >
          Réserver un véhicule
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "0.96rem", maxWidth: "480px", margin: "0 auto" }}>
          Complétez les étapes ci-dessous — la réservation prend moins de 3 minutes.
        </p>
      </div>
      <RentWizard />
    </main>
  );
}
