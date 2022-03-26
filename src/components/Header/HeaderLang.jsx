import { Box, Button } from '@mui/material';
import React from 'react';
import FlagEN from '../../Assets/svg/FlagEN';
import FlagIL from '../../Assets/svg/FlagIL';

function HeaderLang(props) {
  return (
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
  );
}

export default HeaderLang;
