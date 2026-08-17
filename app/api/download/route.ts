import { WINDOWS_SETUP_URL } from "@/lib/download";
import { ingestTelemetry } from "@/lib/telemetry";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    await ingestTelemetry({ e: "download", src: "web" }, request);
  } catch (err) {
    console.warn("[telemetry] download", err);
  }
  return Response.redirect(WINDOWS_SETUP_URL, 302);
}
