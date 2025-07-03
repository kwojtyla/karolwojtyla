"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { CursorTooltip } from "@/components/ui/cursor-tooltip";
import { useState } from "react";
import { Paper } from "@/types";

type PaperItemProps = Pick<
  Paper,
  "title" | "category" | "year" | "event" | "link"
>;

export default function PaperItem({
  title,
  category,
  year,
  event,
  link,
}: PaperItemProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={link} target="_blank">
      <Card
        className="dark:bg-card hover:bg-card relative flex flex-row items-center gap-3 border-gray-300 bg-transparent p-4 shadow-none transition-all duration-200 hover:shadow-sm dark:border-gray-600"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <CursorTooltip open={hovered} content="Ver na íntegra" />
        <div className="hidden h-fit w-fit p-3 md:block">
          <SquareArrowOutUpRight size={24} />
        </div>
        <div className="flex flex-col gap-1 md:w-full">
          <Badge className="rounded-full">{category}</Badge>
          <CardHeader className="block p-0">
            <CardTitle className="text-base">{title}</CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-sm">
            <CardDescription>
              <span className="font-bold">{year}</span> | {event}
            </CardDescription>
          </CardContent>
        </div>
        <div className="block h-fit w-fit p-3 md:hidden">
          <SquareArrowOutUpRight size={24} />
        </div>
      </Card>
    </Link>
  );
}
