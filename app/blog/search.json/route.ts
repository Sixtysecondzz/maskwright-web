import { getSearchIndex } from "@/lib/blog";

export function GET() {
  return Response.json(getSearchIndex());
}
