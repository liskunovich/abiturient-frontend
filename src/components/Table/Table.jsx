import "./Table.scss"
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import "./Table.scss"
import AdditionalAction from "../AdditionalAction/AdditionalAction.jsx";


export default function StickyHeadTable({columns, rows}) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
            <Paper sx={{width: '100%', overflow: 'hidden', boxShadow: 'none'}}>
                <TableContainer className={"table"} sx={{maxHeight: 550}}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        className="columns-names"
                                        key={column.id}
                                        align={column.align}
                                        sx={{minWidth: column.minWidth}}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.id === 'additional_actions' ? (
                                                           <AdditionalAction row={row}/>
                                                        ) : column.format ? column.format(value) : value}
                                                    </TableCell>
                                                    // <TableCell key={column.id} align={column.align}
                                                    //            className="rows">
                                                    //     {column.format && typeof value === 'number'
                                                    //         ? column.format(value)
                                                    //         : value}
                                                    // </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    language="ru"
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPageOptions={[]}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    labelDisplayedRows={
                        ({from, to, count}) => {
                            return '' + from + '-' + to + ' из ' + count
                        }
                    }
                    labelRowsPerPage={
                        "Строк на странице"
                    }
                />
            </Paper>
    );
}