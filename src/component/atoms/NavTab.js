import React, { useContext } from 'react';
import { TransitContext } from '../../context/TransitContext'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
  
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
   marginBottom:32,
  backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { updateHookState } = useContext(TransitContext)

  const handleChange = (event, newValue) => {
    setValue(newValue);
     if (newValue === 0) {    
      updateHookState('showRouteField', true)
      updateHookState('showTextFiled', false)
    }
    else if (newValue === 1) {
    
      updateHookState('showTextFiled', true)
      updateHookState('showRouteField', false)
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="By Route"  {...a11yProps(0)} />
          <Tab label="By Stop #" {...a11yProps(1)} />
         
        </Tabs>
      </AppBar>
    </div>
  );
}
