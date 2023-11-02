import Layout from "@/components/global/Layout";
import FilterCharacter from "@/components/homepage/FilterCharacters";
import { Box, Container } from "@mui/material";

export default function Characters() {
  return (
    <Layout>
      <Container>
        <FilterCharacter />
        <Box>characters page</Box>
      </Container>
    </Layout>
  );
}
