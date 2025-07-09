import { TipLink } from "@/components/tip-link";
import {
  BriefcaseBusiness,
  Building2,
  CalendarRange,
  CodeXml,
  Link,
  SquareArrowOutUpRight,
} from "lucide-react";

interface ProjectInfoProps {
  companyName: string;
  companyLink: string;
  position: string;
  period: string;
  projectLink: string;
  stack: string;
}

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  tip?: string;
}

const InfoItem = ({ icon, label, value, href, tip }: InfoItemProps) => (
  <div className="flex items-center gap-2">
    {icon}
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      {href ? (
        <TipLink href={href} className="text-sm" tip={tip ? tip : ""}>
          {value}
        </TipLink>
      ) : (
        <p className="text-sm">{value}</p>
      )}
    </div>
  </div>
);

const removeHttps = (link: string): string => {
  if (!link) return "";
  return link.replace(/^https?:\/\//, "").replace(/\/$/, "");
};

const ICON_COLOR = "#6a7282";
const ICON_SIZE = 20;

export default function ProjectInfo({
  companyName,
  companyLink,
  position,
  period,
  projectLink,
  stack,
}: ProjectInfoProps) {
  const projectInfoItems = [
    {
      icon: <Building2 size={ICON_SIZE} color={ICON_COLOR} />,
      label: "Empresa",
      value: companyName,
      href: companyLink,
      tip: "Abrir site da empresa",
    },
    {
      icon: <SquareArrowOutUpRight size={ICON_SIZE} color={ICON_COLOR} />,
      label: "Link da Empresa",
      value: removeHttps(companyLink),
      href: companyLink,
      tip: "Abrir site da empresa",
    },
    {
      icon: <BriefcaseBusiness size={ICON_SIZE} color={ICON_COLOR} />,
      label: "Posição",
      value: position,
    },
    {
      icon: <CalendarRange size={ICON_SIZE} color={ICON_COLOR} />,
      label: "Período",
      value: period,
    },
    {
      icon: <Link size={ICON_SIZE} color={ICON_COLOR} />,
      label: "Link do Projeto",
      value: removeHttps(projectLink),
      href: projectLink,
      tip: "Abrir projeto",
    },
    {
      icon: <CodeXml size={ICON_SIZE} color={ICON_COLOR} />,
      label: "Stack",
      value: stack,
    },
  ];

  return (
    <div className="bg-card flex rounded-lg border border-gray-300 px-4 py-4 md:items-center md:justify-center dark:border-gray-600">
      <div className="flex flex-col gap-2 md:grid md:grid-cols-3 md:grid-rows-2 md:gap-x-12 md:gap-y-2.5">
        {projectInfoItems.map((item, index) => (
          <InfoItem
            key={`${item.label}-${index}`}
            icon={item.icon}
            label={item.label}
            value={item.value}
            href={item.href}
            tip={item.tip}
          />
        ))}
      </div>
    </div>
  );
}
