import Link from "next/link";
import { ComponentProps } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { cn } from "@/lib/utils";

interface TipLinkProps extends ComponentProps<typeof Link> {
  tip: string;
  className?: string;
}

export function TipLink({
  tip,
  className = "",
  children,
  ...linkProps
}: TipLinkProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          {...linkProps}
          className={cn(
            "transition-colors duration-200 hover:text-blue-500",
            className,
          )}
        >
          {children}
        </Link>
      </TooltipTrigger>
      <TooltipContent>{tip}</TooltipContent>
    </Tooltip>
  );
}
