import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

const options = [
 { value: 'option1', label: 'Option 1' },
 { value: 'option2', label: 'Option 2' },
 { value: 'option3', label: 'Option 3' },
];

export default function MultiSelectWithSearch() {
 const [selectedOptions, setSelectedOptions] = React.useState([]);

 const handleChange = (event:any, newValue: any) => {
 setSelectedOptions(newValue);
 };

 return (
 <Autocomplete
   multiple
   id="tags-standard"
   options={options}
   getOptionLabel={(option) => option.label}
   onChange={handleChange}
   renderInput={(params) => <TextField {...params} variant="standard" label="Options" />}
 />
 );
}