import Image from "next/image";

export function AnimatedMessage() {
  return (
    <>
      <span className="relative h-6 w-6 sm:h-12 sm:w-12 -mr-2">
        <Image
          alt="stamp"
          src={"/images/stamp.svg"}
          fill
          className="absolute object-cover"
        />
      </span>
      Qualidade e Confiança
      <span className="relative h-6 w-6 sm:h-12 sm:w-12">
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
