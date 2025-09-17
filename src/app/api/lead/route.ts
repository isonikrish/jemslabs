import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const res = await fetch(process.env.GOOGLE_SHEET_WEBHOOK_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json().catch(() => ({}));
    return NextResponse.json({ status: "ok", sheetResponse: data });
  } catch (err) {
    return NextResponse.json({ status: "error", message: String(err) });
  }
}
