"use client";

import { useState } from "react";
import { HelpCircle, Copy } from "lucide-react";
import { MarkdownRenderer } from "@/components/exam/markdown-renderer";
import { copyToClipboard } from "@/utils/copyToClipboard";

interface TakeItEasyProps {
  question: string;
}

export const TakeItEasy = ({ question }: TakeItEasyProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(question);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2s
    }
  };

  return (
    <div className="my-4 space-y-3 rounded-lg border bg-background/50 p-4">
      <h4 className="font-bold flex items-center gap-2">
        <HelpCircle className="text-primary" />
        Check Your Understanding
      </h4>
      <p className="text-sm font-semibold">
        <MarkdownRenderer>{question}</MarkdownRenderer>
      </p>

      <div className="flex items-center gap-2">
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 rounded-lg border px-2 py-1 text-sm hover:bg-accent"
        >
          <Copy size={16} />
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

