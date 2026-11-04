import { States } from "@/stores/info-store";

type GenerateMessageProps = States;

export const generateMessage = ({ name, info }: GenerateMessageProps) => {
  const { district, city, category, urgency, description } = info;

  return `*Dados do cliente:*

*Nome:* ${name}
*Origem:* ${district}
*Destino:* ${city}
*Categoria:* ${category}
*Urgência:* ${urgency}
${description ? `*Descrição:* ${description}` : ""}
`;
};
