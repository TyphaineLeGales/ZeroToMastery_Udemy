import React from 'react';
import './SearchBar.css'

const SearchBar = ({searchChange}) => {
	return (
		<div className='pa2 searchbar'>
			<input 
				className='pa3 ba'
				type="search" 
				placeholder="search robots"
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBar