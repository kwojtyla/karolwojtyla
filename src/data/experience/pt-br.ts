import { Job } from "@/types";

export const experiences: Job[] = [
  {
    id: 1,
    title: "Engenheiro de Software",
    company: {
      name: "Seazone",
      link: "https://seazone.com.br",
    },
    type: "Estágio",
    description:
      "Atuei no desenvolvimento de features, integrações via API e testes, entregando soluções escaláveis para automação e gestão otimizada de imóveis de temporada do segmento de Hosting da Seazone.",
    startYear: 2024,
    endYear: "Presente",
  },
  {
    id: 2,
    title: "Presidente",
    company: {
      name: "LinkJr",
      link: "https://linkjr.com.br",
    },
    type: "Empresa Júnior",
    description:
      "Liderei uma equipe ágil de 16 pessoas, e, juntos, pudemos desenvolver 3 grandes projetos que puderam não somente impactar empresas locais, mas também promover a inserção de 8 membros no mercado de trabalho. ",
    startYear: 2024,
    endYear: "Presente",
    className: "md:col-start-1 md:row-start-2",
  },
  {
    id: 3,
    title: "Arquiteto de Sistemas",
    company: { name: "Oi S/A", link: "https://oi.com.br" },
    type: "Estágio",
    description:
      "Atuei na gestão de projetos, definição de indicadores e evolução tecnológica de processos, solucionando gargalos de +200 aplicações sem gestão e capitaneando o handover de processos operacionais nas lojas de aplicativos",
    startYear: 2022,
    endYear: 2024,
    className: "md:col-start-1 md:row-start-3",
  },
  {
    id: 4,
    title: "Desenvolvedor Web e Suporte de TI",
    company: {
      name: "Universidade Federal do Pará (UFPA)",
      link: "https://imv.ufpa.br",
    },
    type: "Estágio",
    description:
      "Fui o ponto focal TI do IMV, e pude construir todo o parque tecnológico do instituto: desde a construção de inventário infraestrutural até o desenvolvimento do portal oficial do instituto e suas redes sociais.",
    startYear: 2022,
    endYear: 2022,
  },
  {
    id: 5,
    title: "Desenvolvedor Web e Suporte de TI",
    company: {
      name: "Instituto Federal do Pará (IFPA)",
      link: "https://braganca.ifpa.edu.br",
    },
    type: "Estágio",
    description:
      "Gerenciei o portal oficial do campus Bragança e prestei suporte à infraestrutura de TI. Desenvolvi um agente automatizado que reduziu em 85% a carga de trabalho na emissão de certificados.",
    startYear: 2018,
    endYear: 2019,
  },
];
