"use client";

import { useState } from "react";
import { CheckIcon, CodeIcon, CopyIcon } from "@radix-ui/react-icons";

type CodeBlockProps = {
  filename?: string;
  language: string;
  content: string;
};

const TOKEN_PATTERN = /(\/\/.*$|"(?:\\.|[^"\\])*"|\b(?:struct|let|var|func|return|if|else|guard|import|protocol|extension|class|enum|true|false|nil)\b|\b(?:String|Int|Bool|UUID|Identifiable|ConferenceNote)\b|\b\d+(?:\.\d+)?\b)/g;

function tokenClass(token: string) {
  if (token.startsWith("//")) return "token-comment";
  if (token.startsWith('"')) return "token-string";
  if (/^\d/.test(token)) return "token-number";
  if (/^[A-Z]/.test(token)) return "token-type";
  return "token-keyword";
}

function highlightLine(line: string) {
  const parts: React.ReactNode[] = [];
  let cursor = 0;

  for (const match of line.matchAll(TOKEN_PATTERN)) {
    const index = match.index ?? 0;
    if (index > cursor) parts.push(line.slice(cursor, index));
    parts.push(
      <span className={tokenClass(match[0])} key={`${index}-${match[0]}`}>
        {match[0]}
      </span>,
    );
    cursor = index + match[0].length;
  }

  if (cursor < line.length) parts.push(line.slice(cursor));
  return parts.length > 0 ? parts : " ";
}

export default function CodeBlock({ filename, language, content }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <figure className="code-block">
      <figcaption className="code-block-header">
        <span className="code-block-filename"><CodeIcon />{filename ?? "Code"}</span>
        <span className="code-block-language">{language}</span>
        <button
          className="code-copy-button"
          type="button"
          onClick={copyCode}
          aria-label={copied ? "コピーしました" : "コードをコピー"}
          title={copied ? "コピーしました" : "コードをコピー"}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </button>
      </figcaption>
      <pre>
        <code>
          {content.split("\n").map((line, index) => (
            <span className="code-line" key={`${index}-${line}`}>
              <span className="code-line-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="code-line-content">{highlightLine(line)}</span>
            </span>
          ))}
        </code>
      </pre>
    </figure>
  );
}
