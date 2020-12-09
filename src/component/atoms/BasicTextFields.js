import React,{useState,useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { TransitContext } from '../../context/TransitContext'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '70ch',
    },
  },
 
  search:{
    width: '2ch',
    marginTop: '1.5ch'
  }
}));



export default function BasicTextFields() {
  const classes = useStyles();
  const [value,setValue]=useState('')
  const { updateHookState } = useContext(TransitContext)

  const handleClick = () =>{
    console.log('Inside Click')
    console.log(value)
    updateHookState('fetchDetailsForStop',true)
    updateHookState('stopNumber',value.target.value)
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField  id="outlined-basic" label="Enter Stop Number" variant="outlined" type="number" onBlur={setValue}>     
      </TextField>
      <SearchIcon className={classes.search} onClick={handleClick}/>
    </form>
  );
}
