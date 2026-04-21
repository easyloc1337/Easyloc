"use client";

import { useState } from "react";
import Link from "next/link";

const STEPS = ["Dates", "Véhicule", "Vos infos", "Paiement", "Confirmation"];

const VEHICLES = [
  { id: "v1", icon: "🚗", name: "Peugeot 208", cat: "Citadine", price: "49 € / jour" },
  { id: "v2", icon: "🚙", name: "Renault Clio", cat: "Citadine", price: "45 € / jour" },
  { id: "v3", icon: "🚘", name: "Volkswagen Golf", cat: "Compacte", price: "65 € / jour" },
  { id: "v4", icon: "🏎️", name: "BMW Série 3", cat: "Berline", price: "95 € / jour" },
];

type FormData = {
  pickup: string;
  dropoff: string;
  location: string;
  vehicleId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvv: string;
};

const EMPTY: FormData = {
  pickup: "", dropoff: "", location: "",
  vehicleId: "",
  firstName: "", lastName: "", email: "", phone: "", address: "",
  cardNumber: "", cardExpiry: "", cardCvv: "",
};

function genCode() {
  return "EL-" + Math.random().toString(36).toUpperCase().slice(2, 8);
}

export function RentWizard() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(EMPTY);
  const [code] = useState(genCode);

  function set(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function next() { setStep((s) => Math.min(s + 1, STEPS.length - 1)); }
  function back() { setStep((s) => Math.max(s - 1, 0)); }

  const trackPct = `${(step / (STEPS.length - 1)) * 100}%`;

  return (
    <div className="wizard-wrap">

      {/* Progress */}
      <div className="wizard-progress">
        <div className="wizard-track">
          <div className="wizard-track-fill" style={{ width: trackPct }} />
        </div>
        {STEPS.map((label, i) => (
          <div
            key={label}
            className={
              "wizard-step-dot" +
              (i === step ? " active" : "") +
              (i < step ? " done" : "")
            }
          >
            <div className="wizard-dot-circle">
              {i < step ? "✓" : i + 1}
            </div>
            <span className="wizard-dot-label">{label}</span>
          </div>
        ))}
      </div>

      {/* Panel */}
      <div className="wizard-panel" key={step}>

        {/* ── Étape 1 : Dates ── */}
        {step === 0 && (
          <>
            <h2 className="wizard-panel-title">Choisissez vos dates</h2>
            <p className="wizard-panel-sub">Sélectionnez la période et le lieu de prise en charge.</p>
            <div className="form-grid">
              <div className="form-group">
                <label className="label">Date de départ</label>
                <input
                  className="input"
                  type="date"
                  value={form.pickup}
                  onChange={(e) => set("pickup", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="label">Date de retour</label>
                <input
                  className="input"
                  type="date"
                  value={form.dropoff}
                  onChange={(e) => set("dropoff", e.target.value)}
                />
              </div>
              <div className="form-group form-full">
                <label className="label">Lieu de prise en charge</label>
                <select
                  className="select"
                  value={form.location}
                  onChange={(e) => set("location", e.target.value)}
                >
                  <option value="">Sélectionner une agence…</option>
                  <option value="paris">Paris — Gare du Nord</option>
                  <option value="lyon">Lyon — Part-Dieu</option>
                  <option value="marseille">Marseille — Aéroport</option>
                  <option value="bordeaux">Bordeaux — Centre</option>
                </select>
              </div>
            </div>
            <div className="wizard-actions">
              <Link href="/" className="btn btn-ghost">Annuler</Link>
              <button
                className="btn btn-primary"
                onClick={next}
                disabled={!form.pickup || !form.dropoff || !form.location}
              >
                Continuer →
              </button>
            </div>
          </>
        )}

        {/* ── Étape 2 : Véhicule ── */}
        {step === 1 && (
          <>
            <h2 className="wizard-panel-title">Choisissez un véhicule</h2>
            <p className="wizard-panel-sub">Tous les tarifs sont affichés par jour, assurance incluse.</p>
            <div className="wizard-vehicles">
              {VEHICLES.map((v) => (
                <button
                  key={v.id}
                  className={"vehicle-option" + (form.vehicleId === v.id ? " selected" : "")}
                  onClick={() => set("vehicleId", v.id)}
                  type="button"
                >
                  <span className="vehicle-icon">{v.icon}</span>
                  <div className="vehicle-name">{v.name}</div>
                  <div className="vehicle-cat">{v.cat}</div>
                  <div className="vehicle-price">{v.price}</div>
                </button>
              ))}
            </div>
            <div className="wizard-actions">
              <button className="btn btn-ghost" onClick={back}>← Retour</button>
              <button
                className="btn btn-primary"
                onClick={next}
                disabled={!form.vehicleId}
              >
                Continuer →
              </button>
            </div>
          </>
        )}

        {/* ── Étape 3 : Infos client ── */}
        {step === 2 && (
          <>
            <h2 className="wizard-panel-title">Vos coordonnées</h2>
            <p className="wizard-panel-sub">Ces informations apparaîtront sur votre contrat de location.</p>
            <div className="form-grid">
              <div className="form-group">
                <label className="label">Prénom</label>
                <input
                  className="input"
                  placeholder="Marie"
                  value={form.firstName}
                  onChange={(e) => set("firstName", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="label">Nom</label>
                <input
                  className="input"
                  placeholder="Dupont"
                  value={form.lastName}
                  onChange={(e) => set("lastName", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="label">E-mail</label>
                <input
                  className="input"
                  type="email"
                  placeholder="marie@exemple.fr"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="label">Téléphone</label>
                <input
                  className="input"
                  type="tel"
                  placeholder="+33 6 00 00 00 00"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                />
              </div>
              <div className="form-group form-full">
                <label className="label">Adresse</label>
                <input
                  className="input"
                  placeholder="12 rue de la Paix, 75001 Paris"
                  value={form.address}
                  onChange={(e) => set("address", e.target.value)}
                />
              </div>
            </div>
            <div className="wizard-actions">
              <button className="btn btn-ghost" onClick={back}>← Retour</button>
              <button
                className="btn btn-primary"
                onClick={next}
                disabled={!form.firstName || !form.lastName || !form.email}
              >
                Continuer →
              </button>
            </div>
          </>
        )}

        {/* ── Étape 4 : Paiement ── */}
        {step === 3 && (
          <>
            <h2 className="wizard-panel-title">Paiement sécurisé</h2>
            <p className="wizard-panel-sub">Vos données bancaires sont chiffrées et ne sont jamais stockées.</p>
            <div className="form-grid">
              <div className="form-group form-full">
                <label className="label">Numéro de carte</label>
                <input
                  className="input"
                  placeholder="0000 0000 0000 0000"
                  maxLength={19}
                  value={form.cardNumber}
                  onChange={(e) => {
                    const v = e.target.value.replace(/\D/g, "").slice(0, 16);
                    set("cardNumber", v.replace(/(.{4})/g, "$1 ").trim());
                  }}
                />
              </div>
              <div className="form-group">
                <label className="label">Date d'expiration</label>
                <input
                  className="input"
                  placeholder="MM/AA"
                  maxLength={5}
                  value={form.cardExpiry}
                  onChange={(e) => {
                    const v = e.target.value.replace(/\D/g, "").slice(0, 4);
                    set("cardExpiry", v.length > 2 ? v.slice(0, 2) + "/" + v.slice(2) : v);
                  }}
                />
              </div>
              <div className="form-group">
                <label className="label">CVV</label>
                <input
                  className="input"
                  placeholder="123"
                  maxLength={3}
                  value={form.cardCvv}
                  onChange={(e) => set("cardCvv", e.target.value.replace(/\D/g, "").slice(0, 3))}
                />
              </div>
            </div>
            <div className="wizard-actions">
              <button className="btn btn-ghost" onClick={back}>← Retour</button>
              <button
                className="btn btn-primary"
                onClick={next}
                disabled={form.cardNumber.replace(/\s/g, "").length < 16 || !form.cardExpiry || !form.cardCvv}
              >
                Confirmer la réservation →
              </button>
            </div>
          </>
        )}

        {/* ── Étape 5 : Confirmation ── */}
        {step === 4 && (
          <div className="wizard-success">
            <div className="wizard-success-icon">✓</div>
            <h2>Réservation confirmée !</h2>
            <p>
              Un e-mail de confirmation a été envoyé à <strong>{form.email || "votre adresse"}</strong> avec votre contrat et votre facture.
            </p>
            <div className="confirmation-code">{code}</div>
            <p style={{ fontSize: "0.82rem" }}>
              Conservez ce code — il vous sera demandé lors de la prise en charge et pour toute modification.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
              <Link href="/rent/checkin" className="btn btn-ghost">
                Prise en charge →
              </Link>
              <Link href="/" className="btn btn-primary">
                Retour à l'accueil
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
