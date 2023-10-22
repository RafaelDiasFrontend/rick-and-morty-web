import Head from "next/head";
import { ReactNode } from "react";

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
  return (
    <>
      <Head>
        <title>{mainTitle}</title>
        <meta name="description" content={String(description)} key="desc" />
      </Head>
      {showNav && <nav>{/* navbar aqui dentro */}</nav>}
      <main>{children}</main>
      {showFooter && <footer>{/* footer aqui dentro */}</footer>}
    </>
  );
}
