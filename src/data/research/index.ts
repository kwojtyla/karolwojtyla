import { research as researchPt } from "./pt-br";
import { research as researchEn } from "./en";

export const getResearch = (locale: string = "pt-br") => {
  return locale === "en" ? researchEn : researchPt;
};
