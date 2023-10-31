import { useTheme } from '@mui/material'

export default function themeValue(light: string, dark: string) {
  const theme = useTheme()
  return theme.palette.mode === 'dark' ? dark : light
}

export const truncateName = (name: string) => {
  if (name.length > 16) {
    return name.slice(0, 16) + ''
  }
  return name
}
