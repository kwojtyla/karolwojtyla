import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get("lang");
  const locale = langCookie?.value || "pt-br";

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
