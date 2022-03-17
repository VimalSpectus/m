import React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FourthQues from './FourthQues'

const ThirdQues = () => {

  // const [buttonClickCont, setbuttonClickCont] = useState<number>(3);

  // const handleClick = () => {
  //   setbuttonClickCont(4);
  // }

  return (
    <div>
      {/* {buttonClickCont===3 ? ( 
      <>
      <h2>
        Question 3 :-What is the correct command to create a new React project?
      </h2>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="standard-basic" label="Answer" variant="standard" />
        </Box>
      </>
):null} */}

{/* {buttonClickCont === 4 ? (
        <FourthQues />
      ) : null} */}

    </div>
  )
}
export default ThirdQues