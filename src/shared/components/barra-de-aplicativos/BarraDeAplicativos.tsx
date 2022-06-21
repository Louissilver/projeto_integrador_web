import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { useTheme } from '@mui/system';

const pages = [
  {
    label: 'Início',
    to: 'inicio',
  },
  {
    label: 'Sobre',
    to: 'sobre',
  },
  {
    label: 'Empreendimentos',
    to: 'empreendimentos',
  },
  {
    label: 'Cadastro',
    to: 'cadastro',
  },
  {
    label: 'Contato',
    to: 'contato',
  },
];

const BarraDeAplicativos: React.FC = ({ children }) => {
  const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigate = useNavigate();

  const handleSelected = (to: string) => {
    const resolvedPath = useResolvedPath(to);
    const match = useMatch({ path: resolvedPath.pathname, end: false });
    return !!match;
  };

  const handleClick = (to: string) => {
    handleCloseNavMenu();
    navigate(to);
  };

  return (
    <Box display="flex" flexDirection="column">
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: { md: 'flex', alignItems: 'space-around' },
            }}
          >
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
              }}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Avatar
                alt="Logo da empresa"
                src="./logob.png"
                sx={{
                  width: '20%',
                  height: '20%',
                  mr: 1,
                }}
                variant="square"
              />
            </Box>

            <Box
              sx={{
                width: {
                  md: 0,
                },
                margin: {
                  md: 0,
                },
                padding: {
                  md: 0,
                },
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  width: {
                    md: 0,
                  },
                  margin: {
                    md: 0,
                  },
                  padding: {
                    md: 0,
                  },
                  display: {
                    xs: 'block',
                    md: 'none',
                  },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.to} onClick={() => handleClick(page.to)}>
                    <Typography
                      textAlign="center"
                      color={theme.palette.primary.contrastText}
                    >
                      {page.label}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1 }} display="flex" alignItems="center">
              <Avatar
                alt="Logo da empresa"
                src="./logob1.png"
                sx={{
                  width: { xs: theme.spacing(5), md: theme.spacing(7) },
                  height: { xs: theme.spacing(5), md: theme.spacing(7) },
                  display: { xs: 'flex', md: 'none' },
                }}
              />
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page.to}
                  onClick={() => handleClick(page.to)}
                  sx={{
                    my: 2,
                    color: theme.palette.primary.contrastText,
                    display: 'block',
                    fontWeight: handleSelected(page.to) ? 'bolder' : '300',
                    opacity: handleSelected(page.to) ? '90%' : '100%',
                  }}
                >
                  {page.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        sx={{ marginTop: { xl: '68.5px', md: '64px', xs: '56px' } }}
        height="100vh"
      >
        {children}
      </Box>
    </Box>
  );
};
export default BarraDeAplicativos;
