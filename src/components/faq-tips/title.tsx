import { Lightbulb } from "lucide-react";

export function Title({ text }: { text: string }) {
  return (
    <div className="overflow-hidden">
      <h1 className="text-xl md:text-6xl text-secondary flex items-center md:justify-center gap-1 uppercase tracking-tighter font-bold text-nowrap animation-title">
        <span className="md:hidden">
          <Lightbulb />
        </span>
        {text}
      </h1>
    </div>
  );
}
