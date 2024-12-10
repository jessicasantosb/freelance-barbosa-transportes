import Image from "next/image";

export function ImageCard({ imageName }: { imageName: string }) {
  return (
    <div className="relative hidden md:flex flex-col-reverse text-right min-w-96 h-96 animation-move-to-right">
      <Image
        alt="icon"
        src={`/images/${imageName}`}
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
  );
}
