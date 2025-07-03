import { useEffect, useState, useRef } from "react";

interface CursorTooltipProps {
  open: boolean;
  content: React.ReactNode;
}

export function CursorTooltip({ open, content }: CursorTooltipProps) {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(
    null,
  );
  const hasMoved = useRef(false);

  useEffect(() => {
    if (!open) {
      setPosition(null);
      hasMoved.current = false;
      return;
    }
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      hasMoved.current = true;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [open]);

  if (!open || !position || !hasMoved.current) return null;

  return (
    <div
      className="bg-primary text-primary-foreground pointer-events-none fixed z-50 max-w-52 rounded-md px-3 py-1.5 text-xs text-balance whitespace-pre-line shadow-md"
      style={{
        top: position.y + 12,
        left: position.x + 12,
      }}
    >
      {content}
    </div>
  );
}
