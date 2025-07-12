"use client";

import { cn } from "@/lib/utils";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";

import { useState } from "react";

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  sizes?: string;
}

export function ProjectImage({
  src,
  alt,
  className,
  containerClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: ProjectImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  return (
    <>
      <div
        className={cn("group relative cursor-zoom-in", containerClassName)}
        role="button"
        onClick={openModal}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openModal();
          }
        }}
        aria-label="Abrir imagem em destaque"
      >
        <Image
          src={src}
          alt={alt}
          className={cn(
            "object-cover transition-transform duration-300",
            className,
          )}
          sizes={sizes}
          priority={priority}
          fill
        />

        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/0 transition-all duration-300 group-hover:bg-black/30 hover:backdrop-blur-xs">
          <ZoomIn
            size={24}
            className="text-white opacity-0 drop-shadow-lg transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={handleBackdropClick}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={-1}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors duration-200 hover:bg-white/20"
            aria-label="Fechar modal"
          >
            <X size={24} />
          </button>

          <div className="relative h-full max-h-[90vh] w-full max-w-[90vw]">
            <Image
              src={src}
              alt={alt}
              className="rounded-lg object-contain"
              sizes="90vw"
              priority
              fill
            />
          </div>
        </div>
      )}
    </>
  );
}
