"use server";

import nodemailer from "nodemailer";
import { FormSchema } from "@/schemas/contact-form-schema";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = FormSchema.safeParse(body);
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: "Dados inválidos" }), {
        status: 400,
      });
    }
    const { username, email, message } = parsed.data;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Novo contato de ${username}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #1f2937;">Nova mensagem de contato</h2>
          <p style="font-size: 16px; color: #374151;">Você recebeu uma nova mensagem através do formulário de contato. Aqui estão os detalhes:</p>
    
          <div style="margin-top: 20px; padding: 15px; background-color: #ffffff; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <p><strong style="color: #1f2937;">👤 Nome:</strong> ${username}</p>
            <p><strong style="color: #1f2937;">✉️ Email:</strong> <a href="mailto:${email}" style="color: #3b82f6;">${email}</a></p>
            <p><strong style="color: #1f2937;">💬 Mensagem:</strong></p>
            <p style="white-space: pre-wrap; color: #374151;">${message}</p>
          </div>
    
          <p style="margin-top: 30px; font-size: 14px; color: #6b7280;">Este email foi enviado automaticamente pelo seu site.</p>
        </div>
      `,
    });

    return new Response(
      JSON.stringify({ message: "Email enviado com sucesso!" }),
      { status: 200 },
    );
  } catch {
    return new Response(JSON.stringify({ error: "Erro ao enviar email" }), {
      status: 500,
    });
  }
}
