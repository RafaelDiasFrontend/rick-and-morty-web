import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import LinkTo from '../LinkTo'
import { Container, useTheme } from '@mui/material'

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
}

const drawerWidth = 240

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'Episódios', link: '/apisodes' },
  { name: 'Personagens', link: '/characters' },
  { name: 'Locais', link: '/locations' },
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
      <Typography variant='h6' sx={{ my: 2, ml: 2 }}>
        Logo
      </Typography>
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
        position='sticky'
        sx={{
          py: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
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
              <img src='/svgs/ricky.svg' alt='ricky and morty' />
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item, index) => (
                <LinkTo href={item.link} key={index}>
                  <Button
                    key={index}
                    sx={{
                      color: 'text.primary',
                      textTransform: 'initial',
                      fontWeight: 'bold',
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
