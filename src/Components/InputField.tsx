import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const InputField = () => {
    const [value, setValue] = useState<any>()
    const handleChange = (event: any) => {
        setValue(event.target.value);
    };


    const navigate = useNavigate();
    const handleClick = () => navigate(`/allques/`, { state: value });
    // console.log(value);
    
    return (
        <div>
            <Box sx={{
                '& > :not(style)': { m: 5, width: '25ch' },
            }}>
                <TextField placeholder='Enter Your Name'
                    value={value}
                    onChange={handleChange}
                />
            </Box>


            <div>
                <Box>
                    <FormControl>

                        <FormHelperText>Please choose language & Pick One Option</FormHelperText>

                        <RadioGroup
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="React.js" control={<Radio />} label="React.js" />
                        <FormControlLabel value="Java" control={<Radio />} label="Java" />
                        <FormControlLabel value="C Programming" control={<Radio />} label="C Programming" />
                    </RadioGroup>
                    </FormControl>
                </Box>
            </div> 

            {/* choose gende */}
            <div>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Choose Your Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>

            </div>

            <Button variant="contained" disabled={!value} color="success" onClick={() => {
                handleClick()
            }}>
                Start
            </Button>
        </div>
    )
}

export default InputField;