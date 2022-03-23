import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import {useState} from 'react';

export default function Login() {
  
const handlerSubmit = (e) => {
  e.preventDefault();
  if(email == '' || password == ''){
    alert('Please fill out all fields')
  }
  console.log(email, password);
}

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handlerSubmit}
    >
         Login Form:
      <div>
       <div><TextField
          required
          id="outlined-required-email"
          label="Email"
          onChange= {e => setEmail(e.target.value)}
        />
        </div>
        <div>
          <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={e => setPassword(e.target.value)}
        />
        </div>
      </div>
      <div><Button type="submit" value="Login" variant="contained" color="success"
      >Login</Button></div>
    </Box>
  );
}

