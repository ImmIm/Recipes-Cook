import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import GoogleLogo from '../../Assets/svg/GoogleLogo';
import user from './testLogin';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, uiActions } from '../../store/store';

export default function Login() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [opacity, setOpacity] = useState(0);
  const [username, setUserName] = useState('');
  const user = useSelector(state => state.auth.currentUser);
  const dispatch = useDispatch();

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (email.trim().length === 0 || password.trim().length === 0) {
      console.log('checking validity');
      alert('Please fill out all fields');
      return;
    }
    
    dispatch(authActions.login({login:email, pass:password, name: username}));
    dispatch(uiActions.setLoginSignUpOff());
    
    setUserName(user);

  };

  useEffect(() => {
    setOpacity(1);
  }, []);

  
  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        maxWidth: '70%',
        width: '100%',
        height: '70%',
        backgroundColor: '#5085A5',
        margin: '0 auto',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '1000',
        borderRadius: '25px',
        opacity: opacity,
        transitionDuration: '0.2s',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
      }}
      position='fixed'
      noValidate
      autoComplete='off'
     >
      <h1>Sign in to acsess more options</h1>
      {/* data input */}
      <Box
        sx={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        position='absolute'>
        <TextField
          required
          id='outlined-required-email'
          label='Email'
          sx={{ margin: '0 auto' }}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete={username}
        />
        <div>
          <TextField
            required
            id='outlined-password-input'
            label='Password'
            type='password'
            autoComplete='current-password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </Box>

      {/* controls */}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button
          type='submit'
          value='Login'
          variant='outlined'
          sx={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '50px',
            borderRadius: '30px',
            background: 'transparent',
            ":hover": 'backgroundColor: "transparent"'
          }}
          position='absolute'>
            <GoogleLogo />
          </Button>
        <Button
          type='submit'
          value='Login'
          variant='contained'
          color='success'
          sx={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          position='absolute'>
          facebook auth
        </Button>
        <Button
          type='submit'
          value='Login'
          variant='contained'
          color='success'
          sx={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '20%',
          }}
          position='absolute'
          onClick={handlerSubmit}>
          Login
        </Button>
      </Box>
    </Box>
  );
}
