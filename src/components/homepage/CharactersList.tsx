import CharacterType from "@/lib/types/CharacterType";
import { GridViewOutlined } from "@mui/icons-material";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import CharactersCard from "./CharactersCard";
interface CharactersListProps {
  characters: CharacterType[];
  showFilter?: Boolean;
}

export default function CharactersList({
  characters,
  showFilter = true,
}: CharactersListProps) {
  return (
    <Container>
      <Box display={"flex"} flexDirection={"column"} gap={3} px={"20px"}>
        {showFilter && (
          <Box alignItems="center" display={"flex"} gap={2}>
            <Typography color="text.primary" variant="h5" fontWeight={"bold"}>
              Personagens
            </Typography>
            <Button
              startIcon={<GridViewOutlined />}
              sx={{
                borderRadius: "150px",
                color: "white",
                textTransform: "initial",
              }}
              variant="contained"
            >
              Ver todos
            </Button>
          </Box>
        )}

        <Grid container spacing={2} sx={{ marginY: "8px" }}>
          {characters.map((character, index) => (
            <Grid key={index} item xs={6} sm={3} md={3} lg={2} columns={5}>
              <CharactersCard character={character} key={index} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
