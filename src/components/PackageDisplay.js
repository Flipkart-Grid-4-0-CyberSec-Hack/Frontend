import { useState} from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
import CVEListModal from "./CVEListModal";
import { Box } from "@mui/material";
import { ColorCode } from "../constants";

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
  
 
  
  
export const PackageDisplay = (props) => {

    const [show, setShow] = useState(false);
    const [data, setData] = useState(null)
    const [packageName, setPackageName] = useState(null);
    const [packageVersion, setPackageVersion] = useState(null);
   

    return(
        <>
        {data != null?<CVEListModal name={packageName} version={packageVersion} cve={data} show={show} module={setShow}/>: null}
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>S No.</StyledTableCell>
            <StyledTableCell align="right">Package Name</StyledTableCell>
            <StyledTableCell align="right">Package Version</StyledTableCell>
            <StyledTableCell align="right">CVE's found</StyledTableCell>
            <StyledTableCell align="right">CVSS Score</StyledTableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {props.info.map((row,index) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {index + 1}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.version}</StyledTableCell>
              <StyledTableCell align="right"><Button onClick={()=>{
               setData(row.vulnerability) 
               setPackageName(row.name)
               setPackageVersion(row.version)
                setShow(true)
              }
                
                } variant="contained" color={row.vulnerability.length === 0?"success": "error"}>{row.vulnerability.length}</Button></StyledTableCell>
              <StyledTableCell align="right">
              <Box sx={{
                        backgroundColor: ColorCode(row.CVSS_Score),
                        width: 50,
                        height: 50,
                        p:2,
                        color: 'white',
                        fontSize : '0.9rem',
                        fontWeight:'bold'
                            }}>
                {row.CVSS_Score.toFixed(2)}</Box></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
    )
}