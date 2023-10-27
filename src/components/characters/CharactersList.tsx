import CharacterType from "@/lib/types/CharacterType";
import { Box, Container, Grid, Typography } from "@mui/material";
import CharactersCard from "./CharactersCard";

interface CharactersListProps {
  characters: CharacterType[];
}

export default function CharactersList({ characters }: CharactersListProps) {
  return (
    <Container>
      <Typography>teste</Typography>
      <Grid
        container
        rowSpacing={10}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        gap={1}
        justifyContent={"center"}
      >
        {characters.map((character, index) => (
          <CharactersCard character={character} key={index} />
        ))}
      </Grid>
    </Container>
  );
}
