import React, { useState } from 'react';
import { Database } from 'firebase/database';


const SearchBar = ({user}) => {
    const [searchText, setSearchText] = useState('');

    const hanldeButtonClick = () => {

    }

    console.log(searchText)
    return (
        <div className='main-container'>
            <input type="text" 
            placeholder='...'
            onChange={e=> {setSearchText(e.target.value)}}
            />
            <button type='button' onChange={hanldeButtonClick}>Search</button>
        </div>
    )
}

export default SearchBar