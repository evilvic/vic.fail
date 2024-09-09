import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "vic.monster",
  EMAIL: "zippy-06-fifer@icloud.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Inicio",
  DESCRIPTION: "Un espacio donde comparto mis proyectos, reflexiones, y avances públicos.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Colección de artículos sobre proyectos, salud mental, programación, y más.",
};

export const WORK: Metadata = {
  TITLE: "Trabajo",
  DESCRIPTION: "Mi trayectoria profesional, lugares donde he trabajado y lo que he logrado.",
};

export const PROJECTS: Metadata = {
  TITLE: "Proyectos",
  DESCRIPTION: "Un vistazo a mis proyectos, con enlaces a repositorios y demostraciones.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/",
  }
];
