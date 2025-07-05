import { education as educationPt } from "./pt-br";
import { education as educationEn } from "./en";

export const getEducation = (locale: string = "pt-br") => {
  return locale === "en" ? educationEn : educationPt;
};
