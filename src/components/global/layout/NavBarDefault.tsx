import themeValue from '@/lib/hooks'
import MenuIcon from '@mui/icons-material/Menu'
import { Container, useTheme } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import LinkTo from '../LinkTo'
import Image from 'next/image'

interface Props {
  window?: () => Window
}

const drawerWidth = 240

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'Episódios', link: '/episodes' },
  { name: 'Personagens', link: '/characters' },
  { name: 'Locais', link: '/locations' },
  { name: '404', link: '/404' },
]

export default function NavBarDefault(props: Props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const theme = useTheme()

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <LinkTo href={item.link} key={index}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'left', ml: '5px' }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </LinkTo>
        ))}
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        elevation={0}
        position='sticky'
        sx={{
          py: 1,
          backgroundColor: themeValue('#fff', '#000'),
        }}
        color='transparent'
        enableColorOnDark
        component='nav'
      >
        <Container>
          <Toolbar
            sx={{
              justifyItems: 'space-between',
            }}
          >
            <Typography
              sx={{
                color: 'text.primary',
                display: { sm: 'block' },
                mr: 'auto',
              }}
            >
              <LinkTo href='/'>
                <Image
                  src='/svgs/ricky.svg'
                  width={148}
                  height={43}
                  alt='ricky and morty'
                />
              </LinkTo>
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item, index) => (
                <LinkTo href={item.link} key={index}>
                  <Button
                    key={index}
                    sx={{
                      color: 'text.primary',
                      textTransform: 'initial',
                    }}
                  >
                    {item.name}
                  </Button>
                </LinkTo>
              ))}
            </Box>

            <IconButton
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{
                ml: 'auto',
                color: 'text.primary',
                display: { sm: 'none' },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  )
}
