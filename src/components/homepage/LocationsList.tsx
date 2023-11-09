import themeValue from "@/lib/hooks";
import LocationType from "@/lib/types/LocationType";
import { GridViewOutlined } from "@mui/icons-material";
import CategoryIcon from "@mui/icons-material/Category";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import LinkTo from "../global/LinkTo";
interface LocationsListProps {
  locations?: LocationType[];
  showTitle?: Boolean;
}

export default function LocationsList({
  locations,
  showTitle = true,
}: LocationsListProps) {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={5}>
      {showTitle && (
        <Box alignItems="center" display={"flex"} gap={2}>
          <Typography color="text.primary" variant="h5" fontWeight={"bold"}>
            Localizaçoes
          </Typography>
          <LinkTo href="/locations">
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
          </LinkTo>
        </Box>
      )}
      <Grid container spacing={2}>
        {locations?.map((location, index) => (
          <Grid key={index} item xs={6} sm={4} md={3} lg={2}>
            <LocationCard locationData={location} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function LocationCard({ locationData }: { locationData: LocationType }) {
  const { type, name, id } = locationData;
  return (
    <LinkTo href={`/locations/${id}`}>
      <Box
        borderRadius="10px"
        p={2}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        position={"relative"}
        height={"100px"}
        sx={{
          borderRadius: "16px",
          border: `1px solid ${themeValue("#11111117", "#fafafa25")}`,
          transition: "box-shadow 0.2s ease, transform 0.2s ease", // Add transform to the transition
          "&:hover": {
            border: "1px solid #11b0c885",
            transform: "translateY(-5px)", // Move the element 5 pixels up on hover
          },
        }}
      >
        <Image
          style={{
            position: "absolute",
            top: -25,
            left: "50%",
            transform: "translateX(-50%)",
            filter: themeValue("invert(0%)", "invert(100%)"),
          }}
          height={40}
          width={40}
          src="/homeimages/iconPlanet.png"
          alt="iconPlanet"
        />
        <Typography variant="subtitle2" color="text.primary">
          {type}
        </Typography>
        <Typography lineHeight={1.2} variant="subtitle1" color="primary.main">
          {name}
        </Typography>
      </Box>
    </LinkTo>
  );
}
