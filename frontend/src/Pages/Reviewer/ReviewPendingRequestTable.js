import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {Box,Button,Link} from "@mui/material"



function createData(srNo, criterion, status, remarks) {
  return {srNo, criterion, status, remarks  };
}

const rows = [
  createData(1,"Qlik Sense App Nomenclature","-","-"),
  createData(2,"Tags for Qlik Sense Apps","-","-"),
  createData(3,"Folder Structure for QVD Storage","-","-"),
  createData(4,"QVD Nomenclature","-","-"),
  createData(5,"Connection String Nomenclature","-","-"),
  createData(6,"Sheet Names","-","-"),
  createData(7,"Qlik App QVD Generator Name","-","-"),
  createData(8,"Section Name","-","-"),
  createData(9,"Widget","-","-"),
  createData(10,"ACoE Logo","-","-"),
  createData(11,"Section Access","-","-"),
 
];

export default function ReviewPendingRequestTable() {
  return (
    <TableContainer component={Paper}>
      <Box
          sx={{
            display: 'flex',
            p: 2
          }}
        >
          <Link href = "/reviewRequests">
                            back
                        </Link>
        </Box>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Sr.No</TableCell>
            <TableCell align="left">Criterion</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Remarks)</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.srNo}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.srNo}
              </TableCell>
              <TableCell align="left">{row.criterion}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell align="left">{row.remarks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Save
          </Button>
        </Box>
    </TableContainer>
  );
}
