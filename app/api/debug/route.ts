import { NextResponse } from "next/server";

export async function GET() {
  const config = {
    ODOO_URL: process.env.ODOO_URL ?? "❌ manquant",
    ODOO_DB: process.env.ODOO_DB ?? "❌ manquant",
    ODOO_USERNAME: process.env.ODOO_USERNAME ?? "❌ manquant",
    ODOO_API_KEY: process.env.ODOO_API_KEY ? "✅ présent" : "❌ manquant",
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL ?? "❌ manquant",
  };

  // Test connexion Odoo
  let odooTest: string;
  try {
    const res = await fetch(`${process.env.ODOO_URL}/web/session/authenticate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0", method: "call", id: 1,
        params: {
          db: process.env.ODOO_DB,
          login: process.env.ODOO_USERNAME,
          password: process.env.ODOO_API_KEY,
        },
      }),
      cache: "no-store",
    });
    const json = await res.json();
    if (json.error) {
      odooTest = `❌ Erreur : ${json.error.data?.message ?? json.error.message}`;
    } else if (!json.result?.uid) {
      odooTest = `❌ Auth échouée — réponse : ${JSON.stringify(json.result).slice(0, 200)}`;
    } else {
      odooTest = `✅ Connecté — uid: ${json.result.uid}, nom: ${json.result.name}`;
    }
  } catch (e) {
    odooTest = `❌ Exception : ${e instanceof Error ? e.message : String(e)}`;
  }

  return NextResponse.json({ config, odooTest });
}
