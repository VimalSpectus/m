import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import ThirdQues from './ThirdQues';



const SecondQues = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  // const [buttonClickCont, setbuttonClickCont] = useState<number>(2)

  // const handleClick = () => {
  //   setbuttonClickCont(3);  
  // }
  return (
    <div>
      {/* {buttonClickCont === 2 ? (<>
        <h2>
          Question 2 :-What command is used to start the React local development server?
        </h2>


        <p><Checkbox {...label}  size="small" />
          <span>npm build.</span>
        </p>

        <p><Checkbox {...label}  size="small" />
          <span>npm start.</span>
        </p>

        <p><Checkbox {...label}  size="small" />
          <span>node start.</span>
        </p>
      </>) : null}   */}

      {/* {buttonClickCont === 3 ? (
        <ThirdQues />
      ) : null} */}


    </div>
  )
}

export default SecondQues