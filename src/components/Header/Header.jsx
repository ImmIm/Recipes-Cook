import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AppLogo from '../../Assets/svg/AppLogo';
import FlagEN from '../../Assets/svg/FlagEN';
import { ButtonGroup } from '@mui/material';
import DarkSwitch from '../UI/DarkSwitch';
import FlagIL from '../../Assets/svg/FlagIL';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const pages = ['Products', 'Recipes'];
const settings = ['Profile', 'Logout'];

const Header = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [visibility, setVisible] = React.useState(false);
  const theme = useSelector((store) => store.theme);
  const currentUser = useSelector((store) => store.currentUser);
  const [logged, setLogged] = React.useState(false);
  const backdrop = useSelector((store) => store.backdrop);
  const dispatch = useDispatch();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const visibilityHandler = () => {
    setVisible((prev) => {
      if (prev === false) {
        return true;
      } else {
        return false;
      }
    });
  };

  React.useEffect(() => {
    if (currentUser !== '') {
      setLogged(true);
      return;
    }
    setLogged(false);
  }, [currentUser]);

  const loginHandler = () => {
    dispatch({ type: 'backdropOn' });
    dispatch({ type: 'logins' });
  };

  const signUphandler = () => {
    dispatch({ type: 'backdropOn' });
    dispatch({ type: 'signups' });
  };

  const testHandler = () => {
    console.log(currentUser);
  };

  const themeChangeHandler = () => {
    if (theme === 'dark') {
      dispatch({ type: 'changeThemeBright' });
    } else {
      dispatch({ type: 'changeThemeDark' });
    }
  };

  return (
    <AppBar
      position='sticky'
      sx={{
        maxWidth: '1920px',
        margin: '0 auto',
        backgroundColor: theme === 'bright' ? '#8EC77F' : '#31708E',
        textColor: '#F7F9FB',
        transition: 'ease',
        transitionDuration: '0.3s',
        zIndex: '10000',
      }}
      onMouseEnter={visibilityHandler}
      onMouseLeave={visibilityHandler}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          {/* Logo svg */}
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
            <Link to='/Recipes-Cook'>
              <AppLogo />
            </Link>
          </Typography>
          {/* Links */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'>
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
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
                display: { xs: 'block', md: 'none' },
              }}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    to={`Recipes-Cook/${page}`}
                    style={{ textDecoration: 'none' }}>
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            Recipies & Cook
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link
                to={`Recipes-Cook/${page}`}
                style={{ textDecoration: 'none' }}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}>
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          {logged ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar>{currentUser.name}</Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}>
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign='center'>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Box>
              <ButtonGroup
                variant='text'
                aria-label='text button group'
                sx={{ borderColor: '#F7F9FB' }}>
                <Button sx={{ color: '#F7F9FB' }} onClick={loginHandler}>
                  Login
                </Button>
                {/* <Link to="Recipes-Cook/login" style={{textDecoration: 'none'}}></Link> */}
                <Button sx={{ color: '#F7F9FB' }} onClick={signUphandler}>
                  Sigh up
                </Button>
              </ButtonGroup>
            </Box>
          )}

          <Box>
            {props.lang === 'EN' ? (
              <Button variant='outline'>
                <FlagEN />
              </Button>
            ) : (
              <Button variant='outline'>
                <FlagIL />
              </Button>
            )}
          </Box>
          <Box>
            <DarkSwitch onChange={themeChangeHandler} />
          </Box>
          <Button onClick={testHandler}>test</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
