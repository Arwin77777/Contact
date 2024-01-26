// import React from 'react'
import TextField from '@mui/material/TextField';
import 'rsuite/dist/rsuite.min.css'; 
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Textarea from './Textarea';

const Inputs = () => {
  return (
    <>
    <div>
        <TextField  style={{marginLeft:'20px',padding:'5px',paddingTop:'25px','&:hover':{ color: 'grey' }}} id="standard-basic" label="First Name" variant="standard" InputLabelProps={{color:'grey'}} InputProps={{color:'grey'}}/>
        <TextField style={{marginLeft:'20px',padding:'5px',paddingTop:'25px'}} id="standard-basic" label="Last Name" variant="standard" InputLabelProps={{color:'grey'}} InputProps={{color:'grey'}}/>
    </div>
    <div>
        <TextField style={{marginLeft:'20px',padding:'5px',paddingTop:'25px'}} id="standard-basic" label="Email" variant="standard" InputLabelProps={{color:'grey'}} InputProps={{color:'grey'}}/>
        <TextField style={{marginLeft:'20px',padding:'5px',paddingTop:'25px'}} id="standard-basic" label="Phone Number" variant="standard" InputLabelProps={{color:'grey'}} InputProps={{color:'grey'}}/>
    </div>

    <div className='radio-inp'>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        style={{
            paddingTop:'10px'
        }}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        
      </RadioGroup>
    </FormControl>

    </div>

    <div style={{marginLeft:'10px',padding:'5px',paddingTop:'20px'}} className='mes-inp'>

    <Textarea></Textarea>
    </div>

    <div className='but-inp'>
    <button className='but' >Send Message</button>
    </div>

    </>
  )
}

export default Inputs