import Image from "next/image";

export function HomeImage() {
  return (
    <div className="hidden md:block relative w-64 h-64 lg:w-96 lg:h-96 animation-move-to-Right">
      <Image
        alt="ferramentas"
        src={"/images/truck.png"}
        fill
        className="absolute object-cover"
      />
    </div>
  );
}
