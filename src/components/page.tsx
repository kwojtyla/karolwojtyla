import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type PageWrapperProps = ComponentProps<"article">;
type PageHeadlineProps = ComponentProps<"section">;
type PageHeaderProps = ComponentProps<"h1">;
type PagePresentationProps = ComponentProps<"p">;

export function PageWrapper({
  children,
  className,
  ...props
}: PageWrapperProps) {
  return (
    <article
      className={cn("px-8 py-16 md:mx-auto md:max-w-7xl md:py-24", className)}
      {...props}
    >
      {children}
    </article>
  );
}

function PageHeadline({ children, className, ...props }: PageHeadlineProps) {
  return (
    <section className={cn("flex flex-col gap-8", className)} {...props}>
      {children}
    </section>
  );
}

function PageHeader({ children, className, ...props }: PageHeaderProps) {
  return (
    <h1
      className={cn(
        "text-3xl leading-none font-bold md:text-5xl md:leading-14",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

function PagePresentation({
  children,
  className,
  ...props
}: PagePresentationProps) {
  return (
    <p className={cn("text-gray-500 dark:text-gray-300", className)} {...props}>
      {children}
    </p>
  );
}

export { PageHeadline, PageHeader, PagePresentation };
