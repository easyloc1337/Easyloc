const ODOO_URL = process.env.ODOO_URL!;
const ODOO_DB = process.env.ODOO_DB!;
const ODOO_USERNAME = process.env.ODOO_USERNAME!;
const ODOO_API_KEY = process.env.ODOO_API_KEY!;

async function authenticate(): Promise<string> {
  const res = await fetch(`${ODOO_URL}/web/session/authenticate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "call",
      id: 1,
      params: {
        db: ODOO_DB,
        login: ODOO_USERNAME,
        password: ODOO_API_KEY,
      },
    }),
    cache: "no-store",
  });

  const json = await res.json();

  if (json.error) {
    throw new Error(`Auth Odoo échouée : ${json.error.data?.message ?? json.error.message}`);
  }
  if (!json.result?.uid) {
    throw new Error(`Auth Odoo échouée : uid manquant. Vérifiez DB, login et API key.`);
  }

  const cookie = res.headers.get("set-cookie") ?? "";
  const match = cookie.match(/session_id=([^;]+)/);
  if (!match) throw new Error("Session Odoo introuvable dans les cookies.");
  return match[1];
}

export async function odooCall<T>(
  model: string,
  method: string,
  args: unknown[] = [],
  kwargs: Record<string, unknown> = {}
): Promise<T> {
  const sessionId = await authenticate();

  const res = await fetch(`${ODOO_URL}/web/dataset/call_kw`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `session_id=${sessionId}`,
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "call",
      id: 2,
      params: { model, method, args, kwargs },
    }),
    cache: "no-store",
  });

  const json = await res.json();
  if (json.error) {
    throw new Error(json.error.data?.message ?? json.error.message);
  }
  return json.result as T;
}
