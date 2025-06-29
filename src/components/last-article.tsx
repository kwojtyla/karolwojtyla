"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface LastArticleProps {
  title: string;
  link: string;
}

export default function LastArticle({ title, link }: LastArticleProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={link}
      className={`flex w-fit py-1 px-3 rounded-full items-center gap-2 transition-all duration-300 ${
        !isHovered ? "bg-emerald-100" : "bg-emerald-200"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-1 px-2 rounded-full transition-all duration-300 ${
          !isHovered ? "bg-emerald-600" : "bg-emerald-700"
        } text-white text-xs`}
      >
        Último artigo
      </div>
      <span className="hidden text-xs text-gray-950 md:block">{title}</span>
      <span className="text-xs text-gray-950 md:hidden">Ler agora</span>
      <ArrowRight
        className={`text-gray-950 transition-all duration-200 ${
          !isHovered ? "ml-0" : "ml-1"
        }`}
        size={16}
      />
    </Link>
  );
}
