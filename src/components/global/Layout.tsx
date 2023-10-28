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
}

export default function Layout({
  title = "default",
  description = "default",
  showNav = true,
  showFooter = true,
  children,
}: LayoutProps) {
  const mainTitle = `Rick e morty | ${title}`;
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>{mainTitle}</title>
        <meta name="description" content={String(description)} key="desc" />
      </Head>
      {showNav && <NavBarDefault />}
      <Box
        sx={{
          gap: 4,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "background.default",
        }}
      >
        {children}
      </Box>
      {/*{showFooter && <FooterDefault />}*/}
    </>
  );
}
