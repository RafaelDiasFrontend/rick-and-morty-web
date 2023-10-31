import CharacterType from "@/lib/types/CharacterType";
import { Box, Button, useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import LinkTo from "../global/LinkTo";
import Link from "next/link";
import themeValue from "@/lib/themeValue";

interface CharactersCardProps {
  character: CharacterType;
}

export default function CharactersCard({ character }: CharactersCardProps) {
  console.log(character);
  const { id, name, image, status, species } = character;
  const theme = useTheme();
  const cardContentItems = [
    {
      text: status,
      srcIcon: "/svgs/pulse.svg",
    },
    {
      text: species,
      srcIcon: "/svgs/alienLight.svg",
    },
    {
      text: "Earth (C-137)",
      srcIcon: "/svgs/planetLight.svg",
    },
  ];

  return (
    <>
      <LinkTo href={`/characters/${id}`}>
        <Card
          sx={{
            maxWidth: 345,
            padding: 2,
            borderRadius: "10px",
          }}
          color="default"
        >
          <CardMedia
            component="img"
            height="194"
            image={image ? image : "/imgs/ricky.jpg"}
            alt="Paella dish"
            sx={{ backgroundColor: "transparent", borderRadius: "20px" }}
          />
          <Box>
            <Box my={"16px"}>
              <Typography
                variant="body1"
                color="text.primary"
                fontWeight={"bold"}
              >
                {name}
              </Typography>
            </Box>
            <Box display="flex-col" gap={"8px"}>
              {cardContentItems.map((item, index) => (
                <Box
                  key={index}
                  display="flex"
                  alignItems={"center"}
                  gap={"4px"}
                >
                  <Image
                    width={16}
                    height={16}
                    src={item.srcIcon}
                    alt={"pulse"}
                    style={{
                      filter: themeValue("invert(0%)", "invert(100%)"),
                    }}
                  />
                  <Typography variant="body1" color="text.primary">
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Button
              sx={{
                mt: 2,
                borderRadius: "10px",
                color: "white",
                float: "right",
              }}
              size="small"
              variant="contained"
            >
              Saiba mais
            </Button>
          </Box>
        </Card>
      </LinkTo>
    </>
  );
}
