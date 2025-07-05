import z from "zod";

export const FormSchema = z.object({
  username: z
    .string()
    .trim()
    .min(2, { message: "Por favor, informe seu nome" })
    .max(60, { message: "O nome deve ter no máximo 60 caracteres" })
    .regex(/^[A-Za-zÀ-ÿ\s'-]+$/, {
      message: "O nome deve conter apenas letras e espaços",
    }),

  email: z
    .string()
    .trim()
    .email({ message: "Informe um e-mail válido" })
    .max(100, { message: "O e-mail deve ter no máximo 100 caracteres" }),

  message: z
    .string()
    .trim()
    .min(10, { message: "A mensagem deve ter no mínimo 10 caracteres" }),
});
