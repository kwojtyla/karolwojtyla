"use server";

import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { NextRequest } from "next/server";
import { Readable } from "stream";

//eslint-disable-next-line
async function streamToBuffer(stream: any): Promise<Buffer> {
  if (Buffer.isBuffer(stream)) {
    return stream;
  }

  if (stream instanceof Uint8Array) {
    return Buffer.from(stream);
  }

  if (stream instanceof Readable) {
    const chunks: Buffer[] = [];
    return new Promise((resolve, reject) => {
      stream.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
      stream.on("error", reject);
      stream.on("end", () => resolve(Buffer.concat(chunks)));
    });
  }

  if (stream && typeof stream.getReader === "function") {
    const reader = stream.getReader();
    const chunks: Uint8Array[] = [];

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
    }

    return Buffer.concat(chunks.map((chunk) => Buffer.from(chunk)));
  }

  if (stream && typeof stream.transformToByteArray === "function") {
    const byteArray = await stream.transformToByteArray();
    return Buffer.from(byteArray);
  }

  throw new Error("Unsupported stream type");
}

const S3 = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") || "en";

  const Bucket = process.env.R2_BUCKET_NAME;
  const Key =
    locale === "pt-br"
      ? "Curriculo_Karol Wojtyla.pdf"
      : "Resume_Karol Wojtyla.pdf";

  try {
    const command = new GetObjectCommand({ Bucket, Key });
    const data = await S3.send(command);

    if (!data.Body) {
      return new Response("Arquivo não encontrado", { status: 404 });
    }

    const buffer = await streamToBuffer(data.Body);

    return new Response(buffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${Key}"`,
        "Content-Length": buffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Download error:", error);
    return new Response("Erro interno do servidor", { status: 500 });
  }
}
