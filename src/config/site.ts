const createSiteConfig = () => {
  const url = "https://karolwojtyla.dev";
  const links = {
    github: "https://github.com/kwojtyla",
    instagram: "https://www.instagram.com/karolwojtyla.dev",
    linkedin: "https://www.linkedin.com/in/karolwojtyla",
    lattes: "http://lattes.cnpq.br/6351448948601591",
  };

  return {
    name: "Karol Wojtyla | Software Engineer",
    description:
      "Engenheiro de Software especialista em transformar experiências digitais com tecnologia",
    ogImage: `${url}/og.jpg`,
    links,
    url,
  };
};

export const siteConfig = createSiteConfig();
