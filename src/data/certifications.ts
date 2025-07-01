import { Certification } from "@/types";

export const certifications: Certification[] = [
  {
    id: 1,
    title: "AWS Certified Cloud Practictioner",
    issuer: "Amazon Web Services",
    badge: "/images/ccp.webp",
    badgeUrl:
      "https://www.credly.com/badges/f63052cd-21ea-4a68-a6e3-5ec39e5568a8",
    startYear: 2025,
    endYear: 2028,
  },
  {
    id: 2,
    title: "AWS re/Start Graduate",
    issuer: "Amazon Web Services",
    badge: "/images/graduate.webp",
    badgeUrl:
      "https://www.credly.com/badges/12582752-f23c-4179-80ff-ceedc7493f48",
    startYear: 2025,
    endYear: "ever",
  },
];
