import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

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
  isTextarea = false,
  ...props
}) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.send(
        'service_snmegpj',
        'template_yczxe8o',
        {
          from_name: formData.username,
          from_email: formData.email,
          message: formData.message,
          to_email: 'bintangyuda08@gmail.com',
        },
        'wijIHQBcOTphkMeq5'
      );

      if (result.status === 200) {
        alert('Pesan berhasil dikirim!');
        setFormData({
          username: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Gagal mengirim pesan. Silakan coba lagi.');
    }
  };

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className={`block text-sm font-medium mb-1 ${darkMode ? 'text-white' : 'text-gray-700'}`}
        >
          {label}
        </label>
      )}
      {isTextarea ? (
        <textarea
          id={name}
          name={name}
          value={value || formData[name]}
          onChange={onChange || handleChange}
          placeholder={placeholder}
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${darkMode
            ? 'bg-[#131523] text-white border-gray-600 focus:ring-blue-500'
            : 'bg-white text-black border-gray-300 focus:ring-blue-500'
            } ${error ? 'border-red-500' : ''}`}
          rows={10}
          {...props}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value || formData[name]}
          onChange={onChange || handleChange}
          placeholder={placeholder}
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${darkMode
            ? 'bg-[#131523] text-white border-gray-600 focus:ring-blue-500'
            : 'bg-white text-black border-gray-300 focus:ring-blue-500'
            } ${error ? 'border-red-500' : ''}`}
          {...props}
        />
      )}
      {error && (
        <span className={`text-sm ${darkMode ? 'text-red-400' : 'text-red-500'}`}>
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;