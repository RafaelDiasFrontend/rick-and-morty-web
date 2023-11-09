import Layout from "@/components/global/Layout";
import {
  fetchCharacterById,
  fetchCharacters,
} from "@/lib/services/characters/characterServices";
import CharacterType from "@/lib/types/CharacterType";
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import themeValue from "@/lib/hooks";
import CharactersList from "@/components/homepage/CharactersList";

const CharacterDetail = ({
  character,
  characters,
}: {
  character: CharacterType;
  characters: CharacterType[];
}) => {
  const { id, name, image, status, species, location, episode, gender } =
    character;

  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:600px)");

  const characterDetails = [
    {
      text: status,
      srcIcon: "/svgs/pulse.svg",
    },
    {
      text: species,
      srcIcon: "/svgs/alienLight.svg",
    },
    {
      text: gender,
      srcIcon: "/svgs/genderLess.svg",
    },
  ];

  return (
    <Layout>
      {/* hero */}
      <Container>
        <Box display={["flex-col", "flex"]} marginTop={"40px"} gap={"64px"}>
          <Box
            height={["20rem", "28rem"]}
            width={["16rem", "23rem"]}
            sx={{
              borderRadius: "16px",
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
          <Box
            display={"flex-col"}
            width={["auto", "30rem"]}
            marginTop={["20px", "0"]}
          >
            <Typography
              fontWeight={"bold"}
              fontSize={["2rem", "3rem"]}
              marginBottom={"32px"}
            >
              {name}
            </Typography>
            <Box
              display={"flex"}
              alignItems={"center"}
              columnGap={"8px"}
              fontSize={"32px"}
              marginBottom={"52px"}
            >
              <OndemandVideoIcon fontSize={"inherit"} />
              <Typography fontSize={["1rem", "1.5rem"]}>
                Participa de {episode?.length} episódios
              </Typography>
            </Box>

            <Box display={"flex"} gap={"24px"}>
              {characterDetails.map((item, index) => (
                <Box
                  key={index}
                  display="flex"
                  alignItems={"center"}
                  gap={"4px"}
                >
                  <Image
                    width={32}
                    height={32}
                    src={item.srcIcon}
                    alt={"pulse"}
                    style={{
                      filter: themeValue("invert(0%)", "invert(100%)"),
                    }}
                  />
                  <Typography
                    fontSize={["0.85rem", "1.5rem"]}
                    color="text.primary"
                  >
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box
              marginTop={"60px"}
              display={"flex "}
              justifyContent={["flex-start", "flex-end"]}
            >
              <Box
                borderRadius="10px"
                maxWidth={"144px"}
                p={2}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                textAlign={"center"}
                bgcolor={themeValue("#F9F9F9", "#313234")}
                height={"10rem"}
                position={"relative"}
              >
                <Image
                  style={{
                    position: "absolute",
                    top: -25,
                    left: "50%",
                    transform: "translateX(-50%)",
                    filter:
                      theme.palette.mode === "dark"
                        ? "invert(100%)"
                        : "invert(0%)",
                  }}
                  height={50}
                  width={50}
                  src="/homeimages/iconPlanet.png"
                  alt="iconPlanet"
                />
                <Typography variant="subtitle2" color="text.primary">
                  {location?.name}
                </Typography>
                <Typography
                  lineHeight={1.2}
                  variant="subtitle1"
                  color="primary.main"
                  mb={2}
                >
                  {location?.name}
                </Typography>
                <Button
                  sx={{
                    borderRadius: "10px",
                    color: "white",
                  }}
                  variant="contained"
                  size="small"
                >
                  Saiba mais
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Mais Personagens */}
        <Box
          display={"flex"}
          gap={"16px"}
          margin={"114px 0 64px"}
          px={["0", "40px"]}
          alignItems={"center"}
        >
          <Image
            src="/svgs/charactersSmile.svg"
            alt="icone-de-personagens"
            width={isMobile ? 32 : 48}
            height={58}
          />
          <Typography
            fontSize={["1rem", "1.5rem"]}
            fontWeight={"bold"}
            lineHeight={"normal"}
          >
            Mais <br />
            Personagens
          </Typography>
        </Box>
        <CharactersList characters={characters} showTitle={false} />
      </Container>
    </Layout>
  );
};

interface CharacterDetailProps {
  character: CharacterType;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await fetchCharacters(1);
  const charactersResult: CharacterType[] = data.characters.results;

  // Generate paths for each character ID
  const paths = charactersResult.map((character: CharacterType) => ({
    params: { id: character.id?.toString() },
  }));

  return {
    paths,
    fallback: false, // Set to true if you want to enable incremental static regeneration
  };
};

export const getStaticProps: GetStaticProps<CharacterDetailProps> = async ({
  params,
}) => {
  const { id } = params as { id: string };
  console.log(id);
  try {
    if (!id) {
      throw new Error("ID is missing.");
    }

    // Fetch the specific character data using the ID
    const character = await fetchCharacterById(id);
    const data = await fetchCharacters(1);
    const charactersResult: CharacterType[] = data.characters.results;

    return {
      props: { character: character, characters: charactersResult },
    };
  } catch (error) {
    console.error("Error fetching character data:", error);
    return {
      notFound: true,
    };
  }
};
export default CharacterDetail;
