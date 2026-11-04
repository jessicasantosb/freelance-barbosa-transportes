import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
};

export function SectionHeading({ title, aside, className }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between sm:gap-10",
        className
      )}
    >
      <h2 className="max-w-3xl font-display text-[clamp(2rem,4.4vw,3.5rem)] uppercase leading-[0.92] tracking-[-0.025em]">
        {title}
      </h2>
      {aside ? (
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:pb-1">
          {aside}
        </p>
      ) : null}
    </div>
  );
}
