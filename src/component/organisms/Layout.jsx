import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import RoutesLoader from '../molecules/RoutesLoader'

import Header from '../atoms/Header'
import TabLoader from '../molecules/TabLoader'
import Metra_Const from '../../shared/constants'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function SimpleContainer() {
  
// const classes = useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography component="div" style={{ backgroundColor: '#f5f5f4', minHeight: '50vh' }} >
        <Header header="App-Header">{Metra_Const.headingLevel1}</Header>
        <TabLoader />
        <RoutesLoader />
        </Typography>
      </Container>
    </React.Fragment>
  );
}
