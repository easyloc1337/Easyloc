const ODOO_URL = process.env.ODOO_URL!;
const ODOO_DB = process.env.ODOO_DB!;
const ODOO_USERNAME = process.env.ODOO_USERNAME!;
const ODOO_API_KEY = process.env.ODOO_API_KEY!;

const authHeader = "Basic " + Buffer.from(`${ODOO_USERNAME}:${ODOO_API_KEY}`).toString("base64");

export async function odooCall<T>(
  model: string,
  method: string,
  args: unknown[] = [],
  kwargs: Record<string, unknown> = {}
): Promise<T> {
  const res = await fetch(`${ODOO_URL}/web/dataset/call_kw`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: authHeader,
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "call",
      params: { model, method, args, kwargs: { ...kwargs, context: { db: ODOO_DB } } },
    }),
    cache: "no-store",
  });

  const json = await res.json();

  if (json.error) {
    throw new Error(json.error.data?.message ?? json.error.message);
  }

  return json.result as T;
}
