const createSiteConfig = () => {
  const url = "https://karolwojtyla.dev";
  const links = {
    github: "https://github.com/kwojtyla",
    instagram: "https://www.instagram.com/karolwojtyla.dev",
    linkedin: "https://www.linkedin.com/in/karolwojtyla",
    lattes: "https://medium.com/linkjr",
  };

  return {
    name: "Karol Wojtyla | Engenheiro de Software",
    description:
      "Engenheiro de Software especialista em transformar experiências digitais com tecnologia",
    ogImage: `${url}/og.jpg`,
    links,
    url,
  };
};

export const siteConfig = createSiteConfig();
