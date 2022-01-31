import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

	const [ inputValue, setInputValue ] = useState('');

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		if(inputValue.trim().length < 3)
			return;

		setCategories( (categories) => [inputValue, ...categories]);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text" 
				value={inputValue}
				onChange={handleInputChange}
			/>
		</form>
	);
};

export default AddCategory;

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired
}