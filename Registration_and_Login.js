import React from 'react';
import { Grid } from '@mui/material';
import Registration from './Registration';
import Login from './Login';

const App = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={6}>
        <Registration />
      </Grid>
      <Grid item xs={6}>
        <Login />
      </Grid>
    </Grid>
  );
};

export default App;
