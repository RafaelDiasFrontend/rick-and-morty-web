import client from "@/lib/apolloClient";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Box, CssBaseline, IconButton, useTheme } from "@mui/material";
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
          mode,
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
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
}
