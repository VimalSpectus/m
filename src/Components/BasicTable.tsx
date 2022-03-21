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
import { makeStyles } from '@material-ui/core/styles';

const BasicTable = () => {
    const location:any = useLocation();
    const answer = location.state;
    console.log(answer);
    
     

    const userData= [

      {
        quesText: " What is JavaScript ?",
        id: 1,
        Ques: 1,
        correctAnswer: [1, 3],
        QuesType: "multiple",
        userAnswer: [],
        option: {
          1: "JavaScript is a powerful programming language", 
          2: "JavaScript is a bad programming language .", 
          3: "JavaScript is a scrpting language"
        },
  
      },
  
  
      {
        quesText: "What command is used to start the React local development server?",
        id: 2,
        Ques: 2,
        correctAnswer: 2,
        QuesType: "single",
        userAnswer: "",
        option: {
          1: "npm build.",
          2: "npm start.",
          3: "node start",
        },
  
      },
  
  
      {
        quesText: "What is the correct command to create a new React project?",
        id: 3,
        Ques: 3,
        userAnswer: "",
        correctAnswer: "npx create-react-app my-app",
        QuesType: "fill in the blank",
        option: {
          1: "npx create-react-app my-app",
        },
      },
  
  
      {
        quesText: " Choose Correct Answer",
        id: 4,
        Ques: 4,
        userAnswer: [],
        correctAnswer: [1, 2, 3],
        QuesType: "multiple",
        option: {
          1: "Variables defined with const cannot be Redeclared",
          2: "Variables defined with const cannot be Redeclared.",
          3: "Variables defined with const cannot be Redeclared",
        },
  
      },
  
      {
        quesText: "All JavaScript values, except primitives, are objects.",
        id: 5,
        Ques: 5,
        correctAnswer: 1,
        userAnswer: "",
        QuesType: "single",
        option: {
          1: "True",
          2: "Flase",
        },
      }
    ];

    
  const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },

  
    ul: {
      "& .MuiPaginationItem-root": {
        color: "#FF0000"
      }
    }
  });
  const classes = useStyles();
 
    return (
        <div>
        <div>
        <p><Typography className={classes.root}><h1>Name:{answer.val}</h1></Typography></p> 
        </div>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table"  >
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
             {answer.answer["0"]}
              </TableCell>
            </TableRow>

              {/*2nd ques */}
              <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             <TableCell>{userData[1].quesText}</TableCell>
              <TableCell align="center"> {userData[1].option[2]}</TableCell>
              <TableCell align="center"> {answer.answer["1"]} </TableCell>
            </TableRow>

              {/* 3rd ques */}
              <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{userData[2].quesText}</TableCell>
              <TableCell align="center"> {userData[2].option[1]}</TableCell>
              <TableCell align="center">{answer.answer["2"]}</TableCell>
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
              <TableCell align="center"> {answer.answer["3"]}</TableCell>
            </TableRow>

              {/* 5th ques */}
              <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{userData[4].quesText}</TableCell>
              <TableCell align="center"> {userData[4].option[1]}</TableCell>
              <TableCell align="center"> {answer.answer["4"]}</TableCell>
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}
export default BasicTable;
