import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { TransitContext } from '../../context/TransitContext'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 450,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));



export default function NativeSelects(props) {
    const classes = useStyles();
    const { hookState, updateHookState } = useContext(TransitContext)
    const { feature } = props.value
    const handleChange = (event) => {
        updateHookState('routeSelected', true)
        updateHookState('selectedRouteData', event.target.value)
        updateHookState('directionSelected',false)
        updateHookState('stopSelected', false)
    };
    const handleDirection = (event) => {
        updateHookState('directionSelected', true)
        updateHookState('stopSelected', false)
        updateHookState('selectedDirectionData', event.target.value)
    }
    const handleStop = (event) => {
        updateHookState('stopSelected', true)
        updateHookState('setSelectedStop', event.target.value)
    }
    return (
        <div>
            <FormControl variant="outlined" className={classes.formControl}>
  
                {feature === 'routes' && (
                    <>
                <InputLabel htmlFor="outlined-age-native-simple">Select Route</InputLabel>
                <Select
                    native
                    onChange={handleChange}
                    label="Select Route"
                    inputProps={{
                        name: 'Select Route',
                        id: 'outlined-age-native-simple',
                    }}
                    
                >
                    <option>Select Route</option>
                    {hookState.routeList.map((route, index) => (
                        <option key={route.route_id} value={route.route_id}>{route.route_label}</option>
                    ))}
                </Select>
                </>
                )}
                {feature === 'direction' && (
                       <>
                       <InputLabel htmlFor="outlined-age-native-simple">Select Destination</InputLabel>
                    <Select
                        native
                        onChange={handleDirection}
                        label="Select Destination"
                        inputProps={{
                            name: 'Select Destination',
                            id: 'outlined-age-native-simple',
                        }}>
                        <option>Select Destination</option>
                        {hookState.selectedDirection.map((direction, index) => (
                            <option key={direction.direction_id} value={direction.direction_id}>{direction.direction_name}</option>
                        ))}
                    </Select>
                    </>
                )}
                {feature === 'Stop' && (
                       <>
                       <InputLabel htmlFor="outlined-age-native-simple">Select Stop</InputLabel>
                    <Select
                        native
                        onChange={handleStop}
                        label="Select Stop"
                        inputProps={{
                            name: 'Select Stop',
                            id: 'outlined-age-native-simple',
                        }}>
                        <option>Select Stop</option>
                        {hookState.selectedStop.map((stop, index) => (
                            <option key={stop.place_code} value={stop.place_code}>{stop.description}</option>
                        ))}
                    </Select>
                    </>
                )}
            </FormControl>
        </div>

    );



}
