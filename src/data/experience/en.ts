import { Job } from "@/types";

export const experiences: Job[] = [
  {
    id: 1,
    title: "Software Engineer",
    company: {
      name: "Seazone",
      link: "https://seazone.com.br",
    },
    type: "Internship",
    description:
      "I contributed to the development of features, API integrations, and testing, delivering scalable solutions for the automation and optimized management of short-term rental properties in Seazone’s Hosting segment.",
    startYear: 2024,
    endYear: "Present",
  },
  {
    id: 2,
    title: "President",
    company: {
      name: "LinkJr",
      link: "https://linkjr.com.br",
    },
    type: "Junior Enterprise",
    description:
      "I led an agile team of 16 people, and together we developed 3 major projects that not only impacted local businesses but also helped 8 team members enter the job market.",
    startYear: 2024,
    endYear: "Present",
    className: "md:col-start-1 md:row-start-2",
  },
  {
    id: 3,
    title: "Systems Architect",
    company: { name: "Oi S/A", link: "https://oi.com.br" },
    type: "Internship",
    description:
      "I was involved in project management, KPI definition, and technological evolution of internal processes, solving bottlenecks across 200+ unmanaged applications and leading the handover of operational processes in app stores.",
    startYear: 2022,
    endYear: 2024,
    className: "md:col-start-1 md:row-start-3",
  },
  {
    id: 4,
    title: "Web Developer & IT Support",
    company: {
      name: "Federal University of Para (UFPA)",
      link: "https://imv.ufpa.br",
    },
    type: "Internship",
    description:
      "I served as the IT focal point at IMV, where I built the institute’s entire tech infrastructure—from assembling the hardware inventory to developing the official website and managing its social media presence.",
    startYear: 2022,
    endYear: 2022,
  },
  {
    id: 5,
    title: "Web Developer & IT Support",
    company: {
      name: "Federal Institute of Pará (IFPA)",
      link: "https://braganca.ifpa.edu.br",
    },
    type: "Internship",
    description:
      "I managed the official portal of the Bragança campus and supported its IT infrastructure. I also developed an automated agent that reduced the workload for certificate issuance by 85%.",
    startYear: 2018,
    endYear: 2019,
  },
];
