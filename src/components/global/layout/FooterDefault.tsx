import { Box, Container, Divider, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LinkTo from "../LinkTo";
import NorthIcon from "@mui/icons-material/North";
import Link from "next/link";
export default function FooterDefault() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Container sx={{ bgcolor: "background.default" }}>
        <Box
          mt={5}
          px={"20px"}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            justifyItems: "center",
          }}
          display="flex"
        >
          <Box>
            <img src="/svgs/ricky.svg" alt="ricky and morty" />
          </Box>

          <Box
            display={isVisible ? "flex" : "hidden"}
            gap={1}
            alignItems={"center"}
            justifyContent={"center"}
            onClick={scrollToTop}
          >
            <Typography variant="subtitle2">Voltar ao topo</Typography>
            <IconButton color="primary" sx={{ border: "2px solid black" }}>
              <NorthIcon />
            </IconButton>
          </Box>
        </Box>
        <Divider
          sx={{
            mt: [3, 3, 5, 10],
            mb: [2, 3, 4, 5],
            backgroundColor: "primary.main",
          }}
        />

        <Box
          display={["block", "block", "flex"]}
          textAlign={["center", "center", "start"]}
          justifyContent={"space-between"}
          px={"20px"}
        >
          <Typography variant="subtitle1" fontWeight={"bold"}>
            &copy;{new Date().getFullYear()}
          </Typography>
          <Typography variant="subtitle1">
            Desenvolvido com 💙 por{" "}
            <Link href="https://github.com/EdgarSantiago">EdgarSantiago</Link>,{" "}
            <Link href="https://github.com/RafaelDiasFrontend">
              Rafael Dias
            </Link>
          </Typography>
        </Box>
      </Container>
    </>
  );
}
