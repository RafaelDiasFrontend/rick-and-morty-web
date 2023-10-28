import LocationType from "@/lib/types/LocationType";
import CategoryIcon from "@mui/icons-material/Category";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
interface LocationsListProps {
  locations?: LocationType[];
}

export default function LocationsList({ locations }: LocationsListProps) {
  return (
    <Container>
      <Box display={"flex"} flexDirection={"column"} gap={3} px={"20px"}>
        <Box alignItems="center" display={"flex"} gap={2}>
          <Typography color="text.primary" variant="h5" fontWeight={"bold"}>
            Locais
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
          {locations?.map((location, index) => (
            <Grid key={index} item xs={3} md={2}>
              <Box
                borderRadius="10px"
                p={2}
                bgcolor="background.paper"
                display={"flex"}
                flexDirection={"column"}
                alignContent={"center"}
                alignItems={"center"}
                textAlign={"center"}
              >
                <Image
                  height={50}
                  width={50}
                  src="/homeimages/iconPlanet.png"
                  alt="iconPlanet"
                />
                <Typography variant="subtitle2" color="text.primary">
                  {location.type}
                </Typography>
                <Typography variant="subtitle1" color="primary.main">
                  {location.name}
                </Typography>
                <Button
                  sx={{
                    borderRadius: "10px",
                    color: "white",
                  }}
                  variant="contained"
                >
                  Saiba mais
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
