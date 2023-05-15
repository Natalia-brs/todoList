import React from 'react';

const FormRow = ({ name, type, value, labelText, handleChange }) => {
  return (
    <div>
      <label>{labelText || name}</label>
      <input
        className='w-80 border-b-2 border-gray-900 text-black rounded-md'
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormRow;
