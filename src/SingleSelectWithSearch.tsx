import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

const options = [
 { value: 'option1', label: 'Option 1' },
 { value: 'option2', label: 'Option 2' },
 { value: 'option3', label: 'Option 3' },
];

export default function SingleSelectWithSearch() {
 const [selectedOption, setSelectedOption] = React.useState(null);

 const handleChange = (event: any, newValue: any) => {
 setSelectedOption(newValue);
 };

 return (
 <Autocomplete
  id="single-select"
  options={options}
  getOptionLabel={(option) => option.label}
  onChange={handleChange}
  renderInput={(params) => <TextField {...params} variant="standard" label="Options" />}
 />
 );
}