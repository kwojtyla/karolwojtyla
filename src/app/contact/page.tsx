"use client";

import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  PageHeader,
  PageHeadline,
  PagePresentation,
  PageWrapper,
} from "@/components/page";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { siteConfig } from "@/config/site";
import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { FormSchema } from "@/schemas/contact-form-schema";
import { toast } from "sonner";
import { useState } from "react";
import { LoadingSpinner } from "@/components/spinner";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useTranslations } from "next-intl";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const t = useTranslations("Contact");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });
  const { reset } = form;

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    setLoading(true);
    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (response.status === 200) {
      toast.success("E-mail enviado com sucesso!", {
        description: format(
          new Date(),
          "EEEE, dd 'de' MMMM 'de' yyyy 'às' HH:mm",
          { locale: ptBR },
        ),
        action: {
          label: "OK",
          onClick: () => {},
        },
      });
      reset();
    } else {
      toast.error("Ocorreu um erro ao enviar o email", {
        description: "Tente novamente mais tarde",
        action: {
          label: "OK",
          onClick: () => {},
        },
      });
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <main>
        <PageWrapper className="flex flex-col gap-8">
          <PageHeadline>
            <PageHeader>{t("headline")}</PageHeader>
            <PagePresentation>{t("presentation")}</PagePresentation>
          </PageHeadline>
          <section className="flex w-full flex-col items-stretch justify-between gap-8 md:flex-row">
            <div className="flex w-full flex-col gap-3">
              <h2 className="text-2xl font-bold">{t("email-title")}</h2>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col gap-3"
                >
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">
                          {t("form.name.label")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("form.name.placeholder")}
                            {...field}
                            required
                            disabled={loading}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">
                          {t("form.email.label")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("form.email.placeholder")}
                            {...field}
                            required
                            disabled={loading}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">
                          {t("form.message.label")}
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t("form.message.placeholder")}
                            {...field}
                            required
                            disabled={loading}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={loading}>
                    {loading ? <LoadingSpinner /> : t("form.button")}
                  </Button>
                </form>
              </Form>
            </div>
            <div className="flex h-px flex-1 border-t md:h-auto md:w-px md:border-l" />
            <div className="flex w-full flex-col gap-3">
              <h2 className="text-2xl font-bold">{t("social-title")}</h2>
              <Link
                href={siteConfig.links.instagram}
                className="flex w-fit items-center gap-2 rounded-lg border border-blue-500 bg-blue-50 px-3 py-1.5 text-xs leading-6 text-nowrap text-blue-500 transition-colors duration-200 hover:bg-blue-100 dark:border-blue-400 dark:bg-blue-950 dark:text-blue-400 dark:hover:bg-blue-900 dark:hover:text-blue-300"
              >
                <Instagram />
                Instagram
              </Link>
              <Link
                href={siteConfig.links.linkedin}
                className="flex w-fit items-center gap-2 rounded-lg border border-blue-500 bg-blue-50 px-3 py-1.5 text-xs leading-6 text-nowrap text-blue-500 transition-colors duration-200 hover:bg-blue-100 dark:border-blue-400 dark:bg-blue-950 dark:text-blue-400 dark:hover:bg-blue-900 dark:hover:text-blue-300"
              >
                <Linkedin />
                LinkedIn
              </Link>
            </div>
          </section>
        </PageWrapper>
      </main>
      <Footer />
    </>
  );
}
