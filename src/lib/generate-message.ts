import { States } from "@/stores/info-store";

type GenerateMessageProps = States;

export const generateMessage = ({ name, info }: GenerateMessageProps) => {
  const { district, city, category, urgency, description } = info;

  return `*Dados do Cliente:*

*Nome:* ${name}
*Endereço:* ${district}, ${city}
*Categoria:* ${category}
*Urgência:* ${urgency}
${description && `*Descrição:* ${description}`}
`;
};
