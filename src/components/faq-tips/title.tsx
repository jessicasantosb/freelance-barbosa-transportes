import { HTMLAttributes } from "react";

type TitleProps = HTMLAttributes<HTMLHeadingElement>;

export function Title({ ...props }: TitleProps) {
  return (
    <div className="overflow-hidden">
      <h1
        {...props}
        className="text-xl md:text-6xl text-secondary flex items-center md:justify-center gap-1 uppercase tracking-tighter font-bold text-nowrap animation-title"
      />
    </div>
  );
}
