import CharacterType from "@/lib/types/CharacterType";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import CharactersCard from "./CharactersCard";
import CategoryIcon from "@mui/icons-material/Category";
interface CharactersListProps {
  characters: CharacterType[];
}

export default function CharactersList({ characters }: CharactersListProps) {
  return (
    <Container>
      <Box display={"flex"} flexDirection={"column"} gap={3} px={"20px"}>
        <Box alignItems="center" display={"flex"} gap={2}>
          <Typography color="text.primary" variant="h5" fontWeight={"bold"}>
            Personagens
          </Typography>
          <Button
            startIcon={<CategoryIcon />}
            sx={{ borderRadius: "150px", color: "white" }}
            variant="contained"
          >
            Ver todos
          </Button>
        </Box>
        <Grid container spacing={2}>
          {characters.map((character, index) => (
            <Grid item xs={6} md={3}>
              <CharactersCard character={character} key={index} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
