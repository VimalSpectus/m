import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const InputField = () => {
    const [state, setState] = React.useState({
        Reactjs: false,
        Python: false,
        C: false,
    });
    const [value, setValue] = useState<any>()

    const handleChange = (event: any) => {
        setValue(event.target.value);
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    console.log(event.target.value)
    };

    const { Reactjs, Python, C } = state;
    const error = [Reactjs, Python, C].filter((v) => v).length !== 1;

    const navigate = useNavigate();   
    const handleClick = () => navigate(`/allques/` ,{state:value});

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
                    <FormControl
                        required
                        error={error}
                        component="fieldset"
                        sx={{ m: 3 }} 
                        variant="standard"
                    >

                        <FormHelperText>Please choose language & Pick One Option</FormHelperText>

                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={Reactjs} onChange={handleChange}   name="Reactjs" />
                                }
                                label="Reactjs"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={Python} onChange={handleChange} name="Python" />
                                }
                                label="Python"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={C} onChange={handleChange} name="C" />
                                }
                                label="C"
                            />
                        </FormGroup>
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
         
                <Button variant="contained" disabled={!value} color="success"  onClick={() => {
                    handleClick()
          }}>
              Start
              </Button>
        </div>
    )
}

export default InputField;