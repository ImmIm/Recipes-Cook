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
import { authActions, uiActions } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import avatarImg from '../../Assets/Imgs/avatar.jpg'

const pages = ['Products', 'Recipes'];

const Header = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [visibility, setVisible] = React.useState(false);
  const theme = useSelector((store) => store.ui.theme);
  const currentUser = useSelector((store) => store.auth.currentUser);
  const [logged, setLogged] = React.useState(false);
  const backdrop = useSelector((store) => store.ui.backdrop);
  const loginmodal = useSelector((store) => store.ui.loginmodal);
  const signupmodal = useSelector((store) => store.ui.signupmodal);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    navigate(`Recipes-Cook/${page}`);
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

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  const profileHandler = () => {
    console.log('profile');
  };

  React.useEffect(() => {
    if (currentUser !== '') {
      setLogged(true);
      return;
    }
    setLogged(false);
  }, [currentUser]);

  const loginHandler = () => {
    dispatch(uiActions.toggleBackdrop());
    dispatch(uiActions.setLoginStatus());
    dispatch(authActions.login({}));
  };

  const signUphandler = () => {
    dispatch(uiActions.toggleBackdrop());
    dispatch(uiActions.setSignUpStatus());
  };

  const themeChangeHandler = () => {
    dispatch(uiActions.toggleTheme());
  };
  const settings = [
    { title: 'Profile', handler: profileHandler },
    { title: 'Logout', handler: logoutHandler },
  ];
  return (
    <AppBar
      position='sticky'
      sx={{
        maxWidth: '1920px',
        margin: '0 auto',
        backgroundColor: theme === 'bright' ? '#E7DBC6' : '#31708E',
        textColor: theme === 'bright' ? '#000000' : '#31708E',
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
              <AppLogo theme={theme} />
            </Link>
          </Typography>
          {/* Links */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              color: theme === 'bright' ? '#000000' : '#FFFFFF',
            }}>
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
              <MenuItem key={'home'}>
                <Link to={`Recipes-Cook/`} style={{ textDecoration: 'none' }}>
                  Home
                </Link>
              </MenuItem>
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  disabled={loginmodal || signupmodal}>
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
            sx={{
              flexGrow: 1,
              display: { xs: 'none', s: 'flex', md: 'none' },
            }}>
            Recipies & Cook
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                onClick={() => handleCloseNavMenu(page)}
                sx={{
                  my: 2,
                  color: theme === 'bright' ? '#000000' : '#F7F9FB',
                  display: 'block',
                }}
                disabled={loginmodal || signupmodal}
                key={page}>
                {page}
              </Button>
            ))}
          </Box>
          {logged ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt='avatar'
                    src={avatarImg}
                    sx={{ width: 40, height: 40 }}>
                    {currentUser.name}
                  </Avatar>
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
                  <MenuItem key={setting.title} onClick={handleCloseUserMenu}>
                    <Typography textAlign='center' onClick={setting.handler}>
                      {setting.title}
                    </Typography>
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
                <Button
                  sx={{ color: theme === 'bright' ? '#000000' : '#F7F9FB' }}
                  onClick={loginHandler}>
                  Login
                </Button>
                {/* <Link to="Recipes-Cook/login" style={{textDecoration: 'none'}}></Link> */}
                <Button
                  sx={{ color: theme === 'bright' ? '#000000' : '#F7F9FB' }}
                  onClick={signUphandler}>
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
            <DarkSwitch onChange={themeChangeHandler} defaultChecked />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
