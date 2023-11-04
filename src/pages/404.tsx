import Layout from "@/components/global/Layout";
import LinkTo from "@/components/global/LinkTo";
import themeValue from "@/lib/hooks";
import { Box, Button, Typography } from "@mui/material";

export default function ErrorPage() {
  return (
    <Layout>
      <Box height={"600px"} className="background-img">
        <Box className="space"></Box>
        <Box className="wrapper">
          <Box className="img-wrapper" color={themeValue("black", "white")}>
            <span>44</span>
          </Box>
          <Typography color="black">
            A página que você esta tentando encontrar
            <br /> foi movida para outro universo.
          </Typography>
          <LinkTo href="/">
            <Button variant="contained">Voltar ao inicio</Button>
          </LinkTo>
        </Box>
      </Box>
    </Layout>
  );
}
