import React from "react";
import PropTypes from "prop-types";
import './Input.less';
const Input = ({ label, text, type, id, value, placeholder, handleChange }) => (
  <div className="form-group">
    <label htmlFor={label}>{text}</label>
    <input
      action={{ color: 'red', labelPosition: 'right', icon: 'at', content: 'Send email' }} 
      type={type}
      className="form-control"
      id={id}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      required
    />
  </div>
);
Input.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
export default Input;