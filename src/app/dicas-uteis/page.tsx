import { tips } from "@/data/tips";
import { Lightbulb } from "lucide-react";
import Image from "next/image";

export default function DicasUteis() {
  return (
    <main className="min-h-[70dvh] my-14 p-4">
      <h1 className="text-xl md:text-6xl flex items-center md:justify-center gap-1 uppercase tracking-tighter font-bold text-nowrap">
        <span className="md:hidden">
          <Lightbulb />
        </span>
        Dicas Úteis
      </h1>

      <div className="flex md:items-center justify-between gap-6">
        <div className="w-full">
          <div className="pt-8 md:pt-14 flex flex-col gap-4">
            {tips.map(({ tip, description }) => (
              <div key={tip}>
                <h3 className="pb-2 text-xl md:text-3xl text-tertiary">
                  {tip}
                </h3>
                <p className="text-md md:text-lg">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden md:block w-96 lg:w-[60%] h-96 text-right">
          <Image
            alt="icon"
            src={"/images/tips.svg"}
            fill
            className="absolute object-cover"
          />
          <a
            href="https://storyset.com/people"
            className="text-xs text-muted-foreground"
          >
            People illustrations by Storyset
          </a>
        </div>
      </div>
    </main>
  );
}
