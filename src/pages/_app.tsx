import client from "@/lib/apolloClient";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import {
  DarkMode,
  DarkModeOutlined,
  LightMode,
  LightModeOutlined,
} from "@mui/icons-material";

import { Box, Button, CssBaseline, PaletteMode, useTheme } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import type { AppProps } from "next/app";
import * as React from "react";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: "#11B0C8",
          },

          mode,
          ...(mode === "light"
            ? {
                background: {
                  default: "#f4f4f4",
                  paper: "#ffffff",
                },
                text: {
                  primary: "#313234",
                },
              }
            : {
                background: {
                  default: "#01090b",
                  paper: "#252222",
                },
                text: {
                  primary: "#fff",
                },
              }),
        },
        typography: {
          fontFamily: ["Inter", "Roboto", "sans-serif"].join(","),
        },
      }),
    [mode]
  );

  return (
    <ApolloProvider client={client}>
      <CssBaseline />
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ApolloProvider>
  );
}

export function ThemeBtn() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const modeOptions = [
    {
      mode: "dark",
      label: "Escuro",
      icon: <DarkMode />,
      outlinedIcon: <DarkModeOutlined />,
    },
    {
      mode: "light",
      label: "Claro",
      icon: <LightMode />,
      outlinedIcon: <LightModeOutlined />,
    },
  ];

  const selectedMode = theme.palette.mode;

  return (
    <Box display={"flex"} gap={1}>
      {modeOptions.map((option) => (
        <Button
          key={option.mode}
          sx={{
            borderRadius: 5,
            textTransform: "initial",
            color:
              selectedMode === option.mode
                ? "white"
                : theme.palette.text.primary,
            backgroundColor:
              selectedMode === option.mode
                ? theme.palette.primary.main
                : "transparent",
            "&:hover": {
              backgroundColor:
                selectedMode === option.mode
                  ? theme.palette.primary.dark
                  : "transparent",
            },
          }}
          variant={selectedMode === option.mode ? "contained" : "text"}
          startIcon={
            selectedMode === option.mode ? option.icon : option.outlinedIcon
          }
          onClick={() => {
            if (selectedMode !== option.mode) {
              colorMode.toggleColorMode();
            }
          }}
        >
          {option.label}
        </Button>
      ))}
    </Box>
  );
}
