import { Box, Button, Container, Grid, Typography } from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import EpisodeType from "@/lib/types/EpisodeType";
interface EpisodesListProps {
  episodes?: EpisodeType[];
}

export default function EpisodesList({ episodes }: EpisodesListProps) {
  return (
    <Container>
      <Box display={"flex"} flexDirection={"column"} gap={3} px={"20px"}>
        <Box alignItems="center" display={"flex"} gap={2}>
          <Typography color="text.primary" variant="h5" fontWeight={"bold"}>
            Episódeos
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
          {episodes?.map((episode, index) => (
            <Grid item xs={6} md={3}>
              <EpisodesCard episodeData={episode} key={index} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import Link from "next/link";
import LinkTo from "../global/LinkTo";
function EpisodesCard({ episodeData }: { episodeData: EpisodeType }) {
  const { id, episode } = episodeData;
  return (
    <LinkTo href={`/episodes/${id}`}>
      <Box
        p={2}
        borderRadius={"10px"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        minHeight={"5rem"}
        bgcolor="background.paper"
        gap={1}
        color="text.primary"
      >
        <Box display={"flex"} gap={1}>
          <OndemandVideoIcon />
          <Typography variant="subtitle2">{episode}</Typography>
        </Box>
        <Button
          sx={{
            borderRadius: "10px",
            color: "white",
            width: ["80%", "80%", "70%", "60%"],
            ml: "auto",
          }}
          variant="contained"
          size="small"
        >
          Saiba mais
        </Button>
      </Box>
    </LinkTo>
  );
}
