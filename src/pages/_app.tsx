import client from "@/lib/apolloClient";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import {
  Box,
  Button,
  CssBaseline,
  IconButton,
  PaletteMode,
  useTheme,
} from "@mui/material";
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

  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            background: {
              default: "fafafa",
            },
            text: {
              primary: "#000000",
            },
          }
        : {
            // palette values for dark mode
            background: {
              default: "#000000",
            },
            text: {
              primary: "#fff",
            },
          }),
    },
  });

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

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
  return (
    <>
      <Button
        onClick={colorMode.toggleColorMode}
        variant="contained"
        startIcon={
          theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )
        }
        sx={{
          width: "180px",
          backgroundColor: "#11B0C8",
          fontWeight: "bold",
        }}
      >
        Mudar tema
      </Button>
    </>
  );
}
