import Link from "next/link";
import { MaskMark } from "@/components/mask-mark";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5 text-ink">
      <span className="grid place-items-center rounded-lg bg-elevated p-1.5 ring-1 ring-line-strong transition group-hover:ring-accent/50">
        <MaskMark size={22} />
      </span>
      {compact ? null : (
        <span className="text-[15px] font-semibold tracking-tight">
          Mask<span className="text-accent">Wright</span>
        </span>
      )}
    </Link>
  );
}
