import Image from "next/image";

export function AnimatedMessage() {
  return (
    <>
      <span className="relative size-6 sm:size-12 -mr-2">
        <Image
          alt="stamp"
          src={"/images/stamp.svg"}
          fill
          className="absolute object-cover"
        />
      </span>
      <span className="text-4xl lg:text-7xl tracking-tight">
        Qualidade e Confiança
      </span>
      <span className="relative size-6 sm:size-12">
        <Image
          alt="shield"
          src={"/images/shield.svg"}
          fill
          className="absolute object-cover"
        />
      </span>
    </>
  );
}
