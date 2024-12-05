import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image alt="logo" src={"/images/logo.png"} width={35} height={20} />
      <h4 className="tracking-wider">SIDINEI BARBOSA</h4>
    </div>
  );
}
