import Link from "next/link";

import { Button } from "@/components/ui/button";
import { generateMessage } from "@/lib/generate-message";
import { useInfoStore } from "@/stores/info-store";

export function StepFinish() {
  const { name, info } = useInfoStore((state) => state);

  const message = generateMessage({ name, info });
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const whatsappLink = `https://wa.me//${number}?text=${encodeURI(message)}`;

  return (
    <div className="flex flex-col gap-4 text-center">
      <p>
        Perfeito <strong>{name}</strong>!
      </p>
      <p>
        Tudo pronto! Envie seus dados pelo WhatsApp e vamos combinar sua viagem!
      </p>
      <Button className="bg-[#075e54] text-[#ece5dd] hover:bg-[#128c7e]">
        <Link href={whatsappLink} target="_blank" className="w-full h-full">
          Enviar para o Whatsapp
        </Link>
      </Button>
    </div>
  );
}
