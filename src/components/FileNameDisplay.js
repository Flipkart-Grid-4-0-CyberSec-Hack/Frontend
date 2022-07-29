import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button} from '@mui/material'
import { useState } from 'react';
import SecretsListModal from './SecretsListModal';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function FilesNameDisplay(props) {

    const [data, setData] = useState(null)
    const [show, setShow] = useState(false);
    const [filename, setFileName] = useState(null);


  return (<>
  {data !== null?<SecretsListModal filename={filename} show={show} module={setShow} lists={data}/>:null}
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>S No.</StyledTableCell>
            <StyledTableCell align="left">File Name</StyledTableCell>
            <StyledTableCell align="left">File Url</StyledTableCell>
            <StyledTableCell align="center">Secrets Found</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.files.map((row,index) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {index + 1}
              </StyledTableCell>
              <StyledTableCell align="left">{row.file}</StyledTableCell>
              <StyledTableCell align="left">{row.url}</StyledTableCell>
              <StyledTableCell align="center"><Button 
              color={row.secrets.length > 0 ? 'error' : 'success'}
              onClick={()=>{
                setData(row.secrets)
                setFileName(row.file)
                setShow(true)
              }}
              variant="contained">{row.secrets.length}</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
