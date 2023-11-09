import Head from "next/head";
import { ReactNode } from "react";
import NavBarDefault from "./layout/NavBarDefault";
import FooterDefault from "./layout/FooterDefault";
import { Box, Container, useTheme } from "@mui/material";

interface LayoutProps {
  showNav?: Boolean;
  showFooter?: Boolean;
  children: ReactNode;
  title?: String;
  description?: String;
  gap?: any;
  urlImageSeo?: String;
  keywords?: String;
  urlSeo?: String;
}

export default function Layout({
  title = "default",
  description = "Descubra o mundo de Rick e Morty com informações, personagens e episódios empolgantes",
  urlSeo = "https://rick-and-morty-web-rose.vercel.app/",
  urlImageSeo = "https://rick-and-morty-web-rose.vercel.app/homeimages/ricky-morty-seo.jpg",
  keywords = "Rick and Morty, série, episódios, personagens",
  showNav = true,
  showFooter = true,
  children,
  gap = "60px",
}: LayoutProps) {
  const mainTitle = `Rick e morty | ${title}`;

  return (
    <>
      <Head>
        <title>{mainTitle}</title>
        <meta name="description" content={String(description)} key="desc" />
        <meta
          name="description"
          content={String(description)}
          key="description"
        />
        <meta name="keywords" content={String(keywords)} />
        <meta name="author" content="Seu Nome ou Nome da Empresa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        {/* Meta tags para redes sociais (opcional) */}
        <meta property="og:title" content={mainTitle} />
        <meta property="og:description" content={String(description)} />
        <meta property="og:image" content={String(urlImageSeo)} />
        <meta property="og:url" content={String(urlSeo)} />
      </Head>
      {showNav && <NavBarDefault />}

      <Box width={"100%"} sx={{ backgroundColor: "background.paper" }}>
        <Container
          sx={{
            gap: ["10px", gap],
            px: "40px",
            display: "flex",
            flexDirection: "column",
            color: "text.primary",
            pb: 5,
          }}
        >
          {children}
          {showFooter && <FooterDefault />}
        </Container>
      </Box>
    </>
  );
}
