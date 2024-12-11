import { ReactNode } from "react";

type TitleProps = {
  text: string;
  icon: ReactNode;
};

export function Title({ text, icon }: TitleProps) {
  return (
    <div className="overflow-hidden">
      <h1 className="text-xl md:text-6xl text-secondary flex items-center md:justify-center gap-1 uppercase tracking-tighter font-bold text-nowrap animation-title">
        <span className="md:hidden">{icon}</span>
        {text}
      </h1>
    </div>
  );
}
