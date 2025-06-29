import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type WidthWrapperProps = ComponentProps<"div">;

export function WidthWrapper({
  children,
  className,
  ...props
}: WidthWrapperProps) {
  return (
    <div className={cn("mx-auto max-w-7xl", className)} {...props}>
      {children}
    </div>
  );
}
