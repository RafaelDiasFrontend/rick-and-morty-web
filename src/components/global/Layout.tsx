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
}

export default function Layout({
  title = "default",
  description = "default",
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
      </Head>
      {showNav && <NavBarDefault />}

      <Box width={"100%"} sx={{ backgroundColor: "background.paper" }}>
        <Container
          sx={{
            gap: gap,
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
