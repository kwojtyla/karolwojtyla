import { PAGES as pagesPt } from "./pt-br";
import { PAGES as pagesEn } from "./en";

export const getPages = (locale: string = "pt-br") => {
  return locale === "en" ? pagesEn : pagesPt;
};
