import { ThemeBtn } from "@/pages/_app";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function Hero() {
  return (
    <Box bgcolor="black">
      <Container sx={{ minHeight: "10vh" }}>
        <Box
          display={["flex"]}
          flexDirection={["column", "column", "row"]}
          gap={4}
          px={"24px"}
          pt={8}
          pb={4}
        >
          <Box
            display={"flex"}
            flexDirection={["column", "column"]}
            justifyContent={"center"}
            gap={4}
            width={["100%", "100%", "50%", "40%"]}
          >
            <Typography
              color="white"
              fontSize={"48px"}
              fontWeight={"bold"}
              variant="h1"
            >
              Saiba tudo em um só lugar.
            </Typography>

            <Typography
              color="white"
              fontSize={"16px"}
              fontWeight={"bold"}
              variant="h1"
            >
              Personagens, localizações, episódios e muito mais.
            </Typography>
            <Button
              variant="contained"
              sx={{
                width: "150px",
                backgroundColor: "#11B0C8",
                fontWeight: "bold",
              }}
            >
              Mudar tema
            </Button>
            <ThemeBtn />
          </Box>

          <Box ml="auto" width={["100%", "100%", "50%", "50%"]}>
            <Image
              width={300}
              height={300}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "bottom",
              }}
              alt="heroimage"
              src="/homeimages/heroImage.png"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
