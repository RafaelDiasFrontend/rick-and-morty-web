import { useTheme } from '@mui/material'

export default function themeValue(light: string, dark: string) {
  const theme = useTheme()
  return theme.palette.mode === 'dark' ? dark : light
}

export interface TruncateNameOptions {
  name: string
  maxLength?: number
}

export const truncateName = ({ name, maxLength = 16 }: TruncateNameOptions) => {
  if (maxLength !== undefined && name.length > maxLength) {
    return name.slice(0, maxLength) + ''
  }
  return name
}
