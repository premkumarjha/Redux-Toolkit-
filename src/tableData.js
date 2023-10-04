import React ,{useState,useEffect} from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import {fetchUserFromAPI} from './userApiCall';
import { useSelector } from 'react-redux';
import LogoLoader from './logoloader';

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

 const UserTable=()=> {
  const users=useSelector((state)=>state.users)
  const dispatch = useDispatch();
  
console.log('user',users)
  useEffect(()=>{
    //if(!users.data)
   dispatch(fetchUserFromAPI());
  },[]);

  return (
    <>
{users?.loading ? <LogoLoader></LogoLoader>:
    <Box sx={{ flexGrow: 1 }} mt={20}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          {/* <Item>xs=4</Item> */}
        </Grid>
        <Grid item xs={8}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Id</StyledTableCell>
                  <StyledTableCell align="right">Name</StyledTableCell>
                  <StyledTableCell align="right">Email</StyledTableCell>
                  <StyledTableCell align="right" mr={50}>Address</StyledTableCell>
                  <StyledTableCell align="left" >
                    Action
                  </StyledTableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {users?.data?.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                      {row.id}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.email}</StyledTableCell>
                    <StyledTableCell align="right" >{row?.address?.city}</StyledTableCell>
                    <Button variant="contained" color="success" style={{marginRight:'30px',marginLeft:'20PX'}}>
                     Add User
                    </Button>
                    <Button variant="contained" color="primary" style={{marginRight:'30px'}}>
                     Edit User
                    </Button>
                    <Button variant="contained" color="error" >
                     Delete User
                    </Button>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={2}>
          {/* <Item>xs=4</Item> */}
        </Grid>
      </Grid>
    </Box>
 }
    </>
  );
}
export default UserTable;