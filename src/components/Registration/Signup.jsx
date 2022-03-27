import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import {useState} from 'react';

export default function Signup() {

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[submitpassword, setSubmitpassword] = useState('');

  
  const handlerSubmit = (e) => {
    e.preventDefault();
    if(name == '' || email == '' || password == '' || submitpassword == ''){
      alert('Please fill out all fields')
    }
    else if(password === submitpassword) {
    console.log(name, email, password, submitpassword);
    }
    else if(password !== submitpassword){
      alert('You entered two different passwords. Please try again.')
    }
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },        width: '100%',
        backgroundColor: '#5085A5',
        margin: '0 auto'
      }}
      maxWidth='1920px'
      position='relative'
      noValidate
      autoComplete="off"
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
      onSubmit={handlerSubmit}
      >Sign up</Button></div>
      </div>
    </Box>
  );
}
