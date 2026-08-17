import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

type InlinePart = string | { type: "link"; href: string; text: string };

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const token =
    /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = token.exec(text))) {
    if (match.index > last) {
      nodes.push(text.slice(last, match.index));
    }
    const raw = match[0];
    if (raw.startsWith("**")) {
      nodes.push(<strong key={key++}>{raw.slice(2, -2)}</strong>);
    } else if (raw.startsWith("*")) {
      nodes.push(<em key={key++}>{raw.slice(1, -1)}</em>);
    } else if (raw.startsWith("`")) {
      nodes.push(
        <code
          key={key++}
          className="rounded bg-bg-deep px-1.5 py-0.5 text-[0.9em] text-ember"
        >
          {raw.slice(1, -1)}
        </code>,
      );
    } else {
      const link = raw.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (link) {
        const href = link[2];
        const label = link[1];
        if (href.startsWith("/")) {
          nodes.push(
            <Link key={key++} href={href} className="text-accent hover:text-accent-hover">
              {label}
            </Link>,
          );
        } else {
          nodes.push(
            <a
              key={key++}
              href={href}
              className="text-accent hover:text-accent-hover"
              rel="noopener noreferrer"
            >
              {label}
            </a>,
          );
        }
      }
    }
    last = match.index + raw.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function parseImage(line: string) {
  const match = line.match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)$/);
  if (!match) return null;
  return { alt: match[1], src: match[2], caption: match[3] ?? "" };
}

function isTableRow(line: string) {
  return line.trim().startsWith("|") && line.trim().endsWith("|");
}

function parseTable(lines: string[]) {
  const rows = lines
    .filter((line) => !/^\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)+\|?$/.test(line.trim()))
    .map((line) =>
      line
        .trim()
        .slice(1, -1)
        .split("|")
        .map((cell) => cell.trim()),
    );
  return rows;
}

export type FaqItem = { q: string; a: string };

export function extractFaq(markdown: string): FaqItem[] {
  const lines = markdown.split(/\r?\n/);
  const start = lines.findIndex((line) => /^##\s+faq$/i.test(line.trim()));
  if (start === -1) return [];
  const items: FaqItem[] = [];
  let current: FaqItem | null = null;
  for (const line of lines.slice(start + 1)) {
    if (/^##\s+/.test(line)) break;
    const q = line.match(/^###\s+(.+)$/);
    if (q) {
      if (current) items.push(current);
      current = { q: q[1].trim(), a: "" };
      continue;
    }
    if (current && line.trim()) {
      current.a = current.a ? `${current.a} ${line.trim()}` : line.trim();
    }
  }
  if (current) items.push(current);
  return items.filter((item) => item.q && item.a);
}

export function extractImages(markdown: string) {
  const images: { src: string; alt: string; caption: string }[] = [];
  for (const line of markdown.split(/\r?\n/)) {
    const image = parseImage(line.trim());
    if (image) images.push(image);
  }
  return images;
}

export function MarkdownBody({ markdown }: { markdown: string }) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let i = 0;
  let key = 0;
  let inFaq = false;

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i += 1;
      continue;
    }

    const image = parseImage(line.trim());
    if (image) {
      const src = image.src.startsWith("/") ? image.src : `/blog/${image.src}`;
      blocks.push(
        <figure key={key++} className="my-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-bg-deep">
            <Image
              src={src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="768px"
            />
          </div>
          {image.caption ? (
            <figcaption className="mt-3 text-sm leading-6 text-dim">
              {image.caption}
            </figcaption>
          ) : null}
        </figure>,
      );
      i += 1;
      continue;
    }

    if (isTableRow(line)) {
      const tableLines = [line];
      i += 1;
      while (i < lines.length && isTableRow(lines[i])) {
        tableLines.push(lines[i]);
        i += 1;
      }
      const rows = parseTable(tableLines);
      const head = rows[0] ?? [];
      const body = rows.slice(1);
      blocks.push(
        <div key={key++} className="my-8 overflow-x-auto rounded-2xl border border-line">
          <table className="w-full text-left text-sm">
            <thead className="bg-bg-deep text-[11px] uppercase tracking-[0.14em] text-dim">
              <tr>
                {head.map((cell) => (
                  <th key={cell} className="px-4 py-3 font-medium sm:px-5">
                    {renderInline(cell)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, ri) => (
                <tr key={ri} className="border-t border-line">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 text-ink/90 sm:px-5">
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }

    const h2 = line.match(/^##\s+(.+)$/);
    if (h2) {
      inFaq = /^faq$/i.test(h2[1].trim());
      blocks.push(
        <h2
          key={key++}
          id={slugify(h2[1])}
          className="display mt-12 text-3xl leading-tight text-ink"
        >
          {h2[1]}
        </h2>,
      );
      i += 1;
      continue;
    }

    const h3 = line.match(/^###\s+(.+)$/);
    if (h3) {
      blocks.push(
        <h3
          key={key++}
          id={slugify(h3[1])}
          className={`mt-8 text-xl font-semibold text-ink ${inFaq ? "text-ember" : ""}`}
        >
          {h3[1]}
        </h3>,
      );
      i += 1;
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^[-*]\s+/, ""));
        i += 1;
      }
      blocks.push(
        <ul key={key++} className="my-6 list-disc space-y-2 pl-6 text-ink/90">
          {items.map((item, idx) => (
            <li key={idx}>{renderInline(item)}</li>
          ))}
        </ul>,
      );
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, ""));
        i += 1;
      }
      blocks.push(
        <ol key={key++} className="my-6 list-decimal space-y-2 pl-6 text-ink/90">
          {items.map((item, idx) => (
            <li key={idx}>{renderInline(item)}</li>
          ))}
        </ol>,
      );
      continue;
    }

    const para: string[] = [line];
    i += 1;
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].startsWith("#") &&
      !lines[i].startsWith("|") &&
      !lines[i].startsWith("![") &&
      !/^[-*]\s+/.test(lines[i]) &&
      !/^\d+\.\s+/.test(lines[i])
    ) {
      para.push(lines[i]);
      i += 1;
    }
    blocks.push(
      <p key={key++} className="mt-6 text-[1.05rem] leading-8 text-ink/90">
        {renderInline(para.join(" "))}
      </p>,
    );
  }

  return <div className="blog-md">{blocks}</div>;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function countWords(markdown: string) {
  return markdown
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[#|*`>-]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

export type { InlinePart };
