import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


const AllQues = () => {

  const [buttonClickCont, setbuttonClickCont] = useState<number>(1);
  const [answer, setAswer] = useState<any>({});
  const [value, setValue] = useState<any>();

  const navigate = useNavigate();
  
  const location:any = useLocation();
  const val = location.state; 

  const state ={
    answer: answer,
    val: val
  }

  const btnHandler1 = () => {
    navigate(`/report`, { state: state})
  };






  const handleClick = () => {
    setbuttonClickCont(prev => prev + 1);
  }

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setbuttonClickCont(value);
  };


  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


  const userCondition= [

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

  const btnhandler = (qid: any, e: any) => {

    // if (Array.isArray(userCondition[qid].userAnswer)) {
    //   setAswer({...answer, [qid]:answer?.[qid] ? [...answer[qid],e.target.value]:[e.target.value]})
    // } else {
    //   setAswer({...answer, [qid]:e.target.value})
    // }
    // setValue(e.target.value); 
  };


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

    blue:{
      color:'blue',
    },

    red:{
      color:'red',
    },

    gray:{
      color:'gray',
    },

    ul: {
      "& .MuiPaginationItem-root": {
        color: "red"
      }
    }

  });
  const classes = useStyles();
  




  return (
    <div>
      <>
        <Stack spacing={2}>
       <p><Typography className={classes.root}><h1>Name:{val}</h1></Typography></p> 
          <Pagination classes={{ ul: classes.ul }} count={5} page={buttonClickCont} onChange={handleChange} />
        </Stack>
        {buttonClickCont === 1 ? (
          <>
            <h2 data-testid="custom-element">
              Question 1 :-  {userCondition[0].quesText}
            </h2>
            <p><Checkbox {...label} size="small" value={1} id="1"  onChange={(e: any) => btnhandler(0, e)} />
              <span> {userCondition[0].option[1]}</span>
            </p>


            <p><Checkbox {...label} size="small" value={2} id="2" onChange={(e: any) => btnhandler(0, e)} />
              <span> {userCondition[0].option[2]}</span>
            </p>

            <p><Checkbox {...label} size="small" value={3} id="3" onChange={(e: any) => btnhandler(0, e)} />
              <span> {userCondition[0].option[3]}</span>
            </p>
          </>
        ) : null}

        {/* second ques */}

        {buttonClickCont === 2 ? (
          <>
            <h2>Question 2 :- {userCondition[1].quesText}</h2>
            <FormControl>
              <RadioGroup>
                <FormControlLabel value="1" id="1" control={<Radio />} label="npm build." onChange={(e: any) => btnhandler(1, e)} />
                <FormControlLabel value="2" id="2" control={<Radio />} label="npm start." onChange={(e: any) => btnhandler(1, e)} />
                <FormControlLabel value="3" id="3" control={<Radio />} label="node start" onChange={(e: any) => btnhandler(1, e)} />
              </RadioGroup>
            </FormControl>
            <br />
          </>
        ) : null}

        {/* third ques */}
        {buttonClickCont === 3 ? (
          <>
            <h2>
              Question 3 :-{userCondition[2].quesText}
            </h2>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField label="Answer" variant="standard" id="1" value={value}  onChange={(e:any)=>btnhandler(2, e)}/>

            </Box>
          </>
        ) : null}

        {/* fourth ques  */}

        {buttonClickCont === 4 ? (
          <>
            <h2>
              Question 4:-
            </h2>
            <h3>{userCondition[3].quesText}</h3>
            <p><b>A: </b>
              <span>{userCondition[3].option[1]}</span>
            </p>
            <p><b>B: </b>
              <span>{userCondition[3].option[2]}</span>
            </p>
            <p><b>C:</b>
              <span>{userCondition[3].option[3]}</span>
            </p>

            <p><Checkbox {...label} size="small" value="1" id="1" onChange={(e:any)=>btnhandler(3, e)}/><span>A</span></p>
            <p><Checkbox {...label} size="small" value="2" id="2" onChange={(e:any)=>btnhandler(3, e)}/><span>B</span></p>
            <p><Checkbox {...label} size="small" value="3" id="3" onChange={(e:any)=>btnhandler(3, e)}/><span>C</span></p>
          </>
        ) : null}



        {buttonClickCont === 5 ? (
          <>

            <h2>
              Question 5 : <br /> {userCondition[4].quesText}.
            </h2>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="1" id="1" control={<Radio />} onChange={(e:any)=>btnhandler(4, e)} label="True" />
                <br />
                <FormControlLabel value="2" id="2" control={<Radio />} onChange={(e:any)=>btnhandler(4, e)} label="False" />

              </RadioGroup>
            </FormControl>
            <div>
              <Button variant="contained" color="success" type="submit"
                onClick={() => {
                  btnHandler1();
                }}
              >
                Submit
              </Button></div>
          </>
        ) : null}

        {buttonClickCont === 5 ? null :
          <Button variant="contained" color="success" onClick={() => {
            handleClick()
          }}>
            Next
          </Button>
        }
      </>
    </div>

  )
}

export default AllQues;