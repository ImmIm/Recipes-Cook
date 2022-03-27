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
import { useSelector, useDispatch} from 'react-redux';

const pages = ['Products', 'Recipes'];
const settings = ['Profile', 'Logout'];
const logged = false;

const Header = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [visibility, setVisible] = React.useState(false);
  const theme = useSelector(store => store.theme)
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

  const themeChangeHandler = () =>{
    if (theme === 'dark') {
      dispatch({type: 'changeThemeBright'});
    } else {
      dispatch({type: 'changeThemeDark'});
    }
  }

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
            <Link to='/Recipes-Cook' ><AppLogo /></Link>
            
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
                  <Typography textAlign='center'>{page}</Typography>
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
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                {page}
              </Button>
            ))}
          </Box>
          {logged ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
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
                <Link to="Recipes-Cook/login" style={{textDecoration: 'none'}}><Button sx={{ color: '#F7F9FB' }}>Login</Button></Link>
                <Link to='Recipes-Cook/signup' style={{textDecoration: 'none'}}><Button sx={{ color: '#F7F9FB' }}>Sigh up</Button></Link>
              </ButtonGroup>
            </Box>
          )}

          <Box>
            {props.lang === 'EN' ? (
              <Button variant='outline' onClick={props.langHandler}>
                <FlagEN />
              </Button>
            ) : (
              <Button variant='outline' onClick={props.langHandler}>
                <FlagIL />
              </Button>
            )}
          </Box>
          <Box>
            <DarkSwitch onChange={themeChangeHandler}/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
