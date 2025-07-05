"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface LastArticleProps {
  placeholder: string;
  title: string;
  link: string;
}

export default function LastArticle({
  placeholder,
  title,
  link,
}: LastArticleProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={link}
      className={`flex w-fit items-center gap-2 rounded-full px-3 py-1 transition-all duration-300 ${
        !isHovered ? "bg-emerald-100" : "bg-emerald-200"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`rounded-full px-2 py-1 transition-all duration-300 ${
          !isHovered ? "bg-emerald-600" : "bg-emerald-700"
        } text-xs text-white`}
      >
        {placeholder}
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
