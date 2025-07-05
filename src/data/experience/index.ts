import { experiences as experiencesPt } from "./pt-br";
import { experiences as experiencesEn } from "./en";

export const getExperiences = (locale: string = "pt-br") => {
  return locale === "en" ? experiencesEn : experiencesPt;
};
