import React, { useState } from 'react';
import Select from 'react-select';

const options = [
 { value: 'option1', label: 'Option 1' },
 { value: 'option2', label: 'Option 2' },
 { value: 'option3', label: 'Option 3' },
];

export default function SingleSelectWithSearchReactSelect() {
 const [selectedOption, setSelectedOption] = useState(null);

 const handleChange = (option: any) => {
   setSelectedOption((prevOption) => (prevOption === option ? null : option));
 };

 return (
   <Select
     options={options}
     isClearable
     onChange={handleChange}
     value={selectedOption}
   />
 );
}