
import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './demo';
import SimpleSelect from './SimpleSelect';
import MultiSelect from './MultiSelect';
import MultiSelectWithSearch from './MultiSelectWithSearch';
import SingleSelectWithSearch from './SingleSelectWithSearch';

ReactDOM.render(<>
<SimpleSelect /><br/>
<MultiSelect /><br/>
<MultiSelectWithSearch /><br/>
<SingleSelectWithSearch /><br/>
</>
, 
document.querySelector('#root'));
    