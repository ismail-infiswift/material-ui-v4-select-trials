import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const options = [
 { value: 'option1', label: 'Option 1' },
 { value: 'option2', label: 'Option 2' },
 { value: 'option3', label: 'Option 3' },
];

export default function MultiSelect() {
 const [selectedOptions, setSelectedOptions] = React.useState([]);

 const handleChange = (event:any) => {
  setSelectedOptions(event.target.value);
 };

 return (
  <form noValidate autoComplete="off">
    <TextField
      select
      variant='outlined'
      label="Options"
      value={selectedOptions}
      onChange={handleChange}
      SelectProps={{ multiple: true }}
      helperText="Please select one or more options"
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