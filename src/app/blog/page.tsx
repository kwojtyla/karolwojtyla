import { Navbar } from "@/components/navbar";
import {
  PageHeader,
  PageHeadline,
  PagePresentation,
  PageWrapper,
} from "@/components/page";
import BlogPlaceholder from "../../../public/images/blog";
import { TipLink } from "@/components/tip-link";
import { useTranslations } from "next-intl";

export default function Blog() {
  const t = useTranslations("Blog");
  const f = useTranslations("Tooltips");
  return (
    <>
      <Navbar />
      <main>
        <PageWrapper className="flex flex-col items-center justify-between gap-3 md:h-[calc(100vh-65px)] md:flex-row">
          <div className="md:w-1/2">
            <BlogPlaceholder className="hidden md:block" size={480} />
            <BlogPlaceholder className="block md:hidden" size={360} />
          </div>
          <PageHeadline className="gap-1 md:w-1/2">
            <PageHeader>{t("headline")}</PageHeader>
            <PagePresentation>
              {t("presentation")}{" "}
              <TipLink
                href="/research"
                className="text-primary underline underline-offset-2"
                tip={f("research-cta")}
              >
                {t("research-cta")}
              </TipLink>
              .
            </PagePresentation>
          </PageHeadline>
        </PageWrapper>
      </main>
    </>
  );
}
