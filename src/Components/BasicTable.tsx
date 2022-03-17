import React from 'react'
import { useLocation } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const BasicTable = () => {
    const location:any = useLocation();
    const userData = location.state;
    console.log(userData);
    return (
        <div>
        <div>
        <Typography><h1>Vimal Tripthi</h1></Typography>
        </div>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h2>Questions</h2></TableCell>
            <TableCell align="center"><h2>Correct Answer</h2></TableCell>
            <TableCell align="center"><h2>User Answer</h2></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {/* 1st ques */}
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}    
            >
            <TableCell>{userData[0].quesText}</TableCell>
              <TableCell align="center">
              {userData[0].option[1]}, <br/>  {userData[0].option[3]}
              </TableCell>
              <TableCell align="center">
              {userData[0].userAnswer[0]}
              </TableCell>
            </TableRow>

              {/*2nd ques */}
              <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             <TableCell>{userData[1].quesText}</TableCell>
              <TableCell align="center"> {userData[1].option[2]}</TableCell>
              <TableCell align="center"> {userData[0].userAnswer}   </TableCell>
            </TableRow>

              {/* 3rd ques */}
              <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{userData[2].quesText}</TableCell>
              <TableCell align="center"> {userData[2].option[1]}</TableCell>
              <TableCell align="center"> {userData[0].userAnswer}</TableCell>
            </TableRow>


              {/* 4th ques */}
              <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{userData[3].quesText}</TableCell>
              <TableCell align="center"> 
                {userData[3].option[1]}, <br/>
                {userData[3].option[1]}, <br/>  
                {userData[3].option[1]}
              </TableCell>
              <TableCell align="center"> {userData[0].userAnswer}</TableCell>
            </TableRow>

              {/* 5th ques */}
              <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{userData[4].quesText}</TableCell>
              <TableCell align="center"> {userData[4].option[1]}</TableCell>
              <TableCell align="center"> {userData[0].userAnswer}</TableCell>
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}
export default BasicTable;
