import { useTheme } from "@mui/material";

export default function themeValue(light: string, dark: string) {
  const theme = useTheme();
  return theme.palette.mode === "dark" ? dark : light;
}
