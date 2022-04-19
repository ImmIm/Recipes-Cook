import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, uiActions } from '../../store/store';

export default function Signup() {

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const [opacity, setOpacity] = useState(0);
  const[submitpassword, setSubmitpassword] = useState('');
  const dispatch = useDispatch()
  const users = useSelector(state => state.users);

  useEffect(() => {
    setOpacity(1);
  }, []);

  
  const handlerSubmit = (e) => {
    e.preventDefault();
    if(name === '' || email === '' || password === '' || submitpassword === ''){
      alert('Please fill out all fields');
      return;
    }

    if(password === submitpassword) {
    dispatch(authActions.signup({email:email,pass: password,name: name}));
    dispatch(uiActions.setLoginSignUpOff());
    console.log(users);
    return;
    }

    if(password !== submitpassword){
      alert('You entered two different passwords. Please try again.');
      return;
    }
  };

  return (
    <Box
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
      onSubmit={handlerSubmit}
    >
         <span>Registration:</span> 
      <div>
          <div><TextField
          required
          id="outlined-required-name"
          label="Name"
          onChange = {e => setName(e.target.value)}
        /></div>
 
       <div><TextField
          required
          id="outlined-required-email"
          label="Email"
          onChange = {e => setEmail(e.target.value)}
        />
        </div>
        <div>
          <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange = {e => setPassword(e.target.value)}
        />
        </div>
        <div>
        <TextField
          required
          id="outlined-password-input-confirm"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          onChange = {e => setSubmitpassword(e.target.value)}
        />
        </div>
        <div><Button type="submit" value="Registration" variant="contained" color="success"
      onClick={handlerSubmit}
      >Sign up</Button></div>
      </div>
    </Box>
  );
}
