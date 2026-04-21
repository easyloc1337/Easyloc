import { PageShell } from "@/components/PageShell";

export default function RentCheckinPage() {
  return (
    <PageShell
      title="Prise en charge du véhicule"
      description="Le grand jour est arrivé : état des lieux du véhicule avec photos, remarques et signature."
      backHref="/rent"
    >
      <div className="step">
        <div className="form-grid">
          <div>
            <label className="label">Kilométrage</label>
            <input className="input" type="text" placeholder="Ex. 45 230 km" />
          </div>
          <div>
            <label className="label">Niveau d’essence</label>
            <select className="select">
              <option>Choisir</option>
              <option>Plein</option>
              <option>3/4</option>
              <option>1/2</option>
              <option>1/4</option>
            </select>
          </div>
        </div>
        <div className="form-grid" style={{ marginTop: 16 }}>
          <div><label className="label">Photo avant</label><input className="input" type="file" /></div>
          <div><label className="label">Photo côté gauche</label><input className="input" type="file" /></div>
          <div><label className="label">Photo arrière</label><input className="input" type="file" /></div>
          <div><label className="label">Photo côté droit</label><input className="input" type="file" /></div>
          <div><label className="label">Photo intérieur</label><input className="input" type="file" /></div>
        </div>
        <div style={{ marginTop: 16 }}>
          <label className="label">Remarques</label>
          <textarea className="textarea" placeholder="Observations sur l’état du véhicule"></textarea>
        </div>
        <div style={{ marginTop: 16 }}>
          <label className="label">Signature</label>
          <input className="input" type="text" placeholder="Signature client" />
        </div>
      </div>
    </PageShell>
  );
}
