import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Metra_Const from '../../shared/constants';

const StyledTableCell = withStyles(() => ({
    head: {
        backgroundColor: '#ffd200',
        color: '#626462'
    },
    body: {
        fontSize: 18,
        fontFamily: 'bold'
    },
}))(TableCell);

const styledDiv = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    body: {
        margin: 16,
        fontSize: 32,
        fontWeight: 700
    }
}));

const stopField = makeStyles((theme) => ({
    body: {
        fontSize: 18,
        marginRight: 16
    }
}))

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);



const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function CustomizedTables(props) {
    const classes = useStyles();
    const classHeading = styledDiv();
    const stopStyle = stopField();
    const { departures, stops } = props.values;

    return (
        <>
            <div className={classHeading.root}>

                <>
                    <p className={classHeading.body}>{stops[0].description}</p>
                    <p className={stopStyle.body}><strong>Stop #: </strong>{stops[0].stop_id}</p>
                </>


            </div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">

                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">ROUTE</StyledTableCell>
                            <StyledTableCell align="left">DESTINATION</StyledTableCell>
                            <StyledTableCell align="right">DEPARTS</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {departures.length === 0 && (
                            <p>{Metra_Const.noDeparture}</p>
                        )}
                    </TableBody>

                    <TableBody>
                        {departures.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.route_short_name}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.description}</StyledTableCell>
                                <StyledTableCell align="right">{row.departure_text}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
