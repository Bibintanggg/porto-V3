import React from 'react';

const Input = ({
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  label,
  error,
  darkMode,
  className = '',
  ...props
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className={`block text-sm font-medium mb-1 ${
            darkMode ? 'text-white' : 'text-gray-700'
          }`}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${
          darkMode
            ? 'bg-[#131523] text-white border-gray-600 focus:ring-blue-500'
            : 'bg-white text-black border-gray-300 focus:ring-blue-500'
        } ${error ? 'border-red-500' : ''}`}
        {...props}
      />
      {error && (
        <span className={`text-sm ${darkMode ? 'text-red-400' : 'text-red-500'}`}>
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;