import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


function TableZone(props) {
    const sortedPlayers = props.players.sort((a, b) => b.score - a.score);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const searchNickname = props.searchNickname;
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    function isNicknameInSearch(searchNick, tableNick) {
      for (let i = 0; i < searchNick.length; i++) {
        if (searchNick[i] != tableNick[i]) {
          return false
        }
      }
      return true
    }
  
    return (
        <div>
            <Table className="table-zone">
              <TableHead>
                <TableRow>
                    <TableCell style={{ fontWeight: 'bold' }} align="center">Lp.</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }} align="center">Nick gracza</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }} align="center">Punkty gracza</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }} align="center">Kolor gracza</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {sortedPlayers.map((row, index) => (
                    searchNickname == "" ?
                    <TableRow key={row._id}>
                        <TableCell align="center">{index + 1}</TableCell>
                        <TableCell align="center">{row.nickname}</TableCell>
                        <TableCell align="center">{row.score}</TableCell>
                        <TableCell align="center">{row.color}</TableCell>
                    </TableRow> : isNicknameInSearch(searchNickname, row.nickname) && 
                    <TableRow key={row._id}>
                        <TableCell align="center">{index + 1}</TableCell>
                        <TableCell align="center">{row.nickname}</TableCell>
                        <TableCell align="center">{row.score}</TableCell>
                        <TableCell align="center">{row.color}</TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>

          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={props.players.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      );
}

export default TableZone;