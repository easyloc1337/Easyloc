import { NextResponse } from "next/server";
import { odooCall } from "@/lib/odoo";

export type OdooVehicle = {
  id: number;
  name: string;
  license_plate: string;
  model_id: [number, string];
  fuel_type: string;
  seats: number;
  color: string;
  image_128: string | false;   // base64
  image_1920: string | false;  // base64 haute résolution
  state_id: [number, string] | false;
};

export type Vehicle = {
  id: number;
  name: string;
  plate: string;
  brand: string;
  fuel: string;
  seats: number;
  color: string;
  image: string | null;
  status: string;
};

export async function GET() {
  try {
    const raw = await odooCall<OdooVehicle[]>(
      "fleet.vehicle",
      "search_read",
      [[["active", "=", true]]],
      {
        fields: ["name", "license_plate", "model_id", "fuel_type", "seats", "color", "image_128", "state_id"],
        limit: 100,
        order: "name asc",
      }
    );

    const vehicles: Vehicle[] = raw.map((v) => ({
      id: v.id,
      name: v.name,
      plate: v.license_plate,
      brand: v.model_id ? v.model_id[1] : v.name,
      fuel: v.fuel_type ?? "—",
      seats: v.seats ?? 5,
      color: v.color ?? "—",
      image: v.image_128 ? `data:image/jpeg;base64,${v.image_128}` : null,
      status: v.state_id ? v.state_id[1] : "Disponible",
    }));

    return NextResponse.json(vehicles);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Erreur Odoo";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
