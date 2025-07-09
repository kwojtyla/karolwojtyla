import Link from "next/link";
import { ComponentProps } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { cn } from "@/lib/utils";
import { SquareArrowOutUpRight } from "lucide-react";

interface TipLinkProps extends ComponentProps<typeof Link> {
  tip: string | React.ReactNode;
  className?: string;
}

export function TipLink({
  tip,
  className = "",
  children,
  ...linkProps
}: TipLinkProps) {
  const isExternal = linkProps.target === "_blank";
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
      <TooltipContent>
        {!isExternal ? (
          tip
        ) : (
          <div className="flex items-center gap-1">
            <span>{tip}</span>
            <SquareArrowOutUpRight size={12} strokeWidth="3" />
          </div>
        )}
      </TooltipContent>
    </Tooltip>
  );
}
