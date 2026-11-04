type PageHeaderProps = {
  title: React.ReactNode;
  description: string;
  count?: string;
};

export function PageHeader({ title, description, count }: PageHeaderProps) {
  return (
    <header className="border-b border-border pb-8">
      <div className="flex items-end justify-between gap-6">
        <h1 className="font-display text-[clamp(2.5rem,6vw,4.8rem)] uppercase leading-[0.86] tracking-[-0.035em]">
          {title}
        </h1>
        {count ? (
          <span className="mono-data hidden shrink-0 pb-1 text-xs text-primary sm:block">
            {count}
          </span>
        ) : null}
      </div>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
        {description}
      </p>
    </header>
  );
}
