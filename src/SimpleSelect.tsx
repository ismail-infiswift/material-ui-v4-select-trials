import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const options = [
 { value: 'option1', label: 'Option 1' },
 { value: 'option2', label: 'Option 2' },
 { value: 'option3', label: 'Option 3' },
];

export default function SimpleSelect() {
 const [selectedOption, setSelectedOption] = React.useState('');

 const handleChange = (event: any) => {
   setSelectedOption(event.target.value);
 };

 return (
   <form noValidate autoComplete="off">
     <TextField
      variant='outlined'
       select
       label="Options"
       value={selectedOption}
       onChange={handleChange}
       helperText="Please select an option"
     >
       {options.map((option) => (
         <MenuItem key={option.value} value={option.value}>
           {option.label}
         </MenuItem>
       ))}
     </TextField>
   </form>
 );
}
