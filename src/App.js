import React from 'react';
import './App.css';
import {Grid} from '@material-ui/core'
import Details from './components/Details/Details';
import useStyles from './styles'
import Main from './components/Main/Main';
import { PushToTalkButtonContainer,PushToTalkButton,ErrorPanel } from '@speechly/react-ui';

function App() {
  const classes = useStyles()
  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems='center' justifyContent='center' style={{height: '100vh'}}>
      <Grid item xs={12} sm={4}>
        <Details title='Income'  />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Main />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Details title='Expense'/>
      </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        {/* <ErrorPanel /> */}
      </PushToTalkButtonContainer>
    </div>
  );
}

export default App;
