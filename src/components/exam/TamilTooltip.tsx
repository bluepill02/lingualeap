
'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface TamilTooltipProps {
  term: string;
  translation: string;
}

export function TamilTooltip({ term, translation }: TamilTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="underline decoration-dotted cursor-help text-accent">
            {term}
          </span>
        </TooltipTrigger>
        <TooltipContent>
          {translation}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

    

    