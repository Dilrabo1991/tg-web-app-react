import React from 'react';
import './Button.css';
function Button({ className, ...props }) {
  return (
    <button {...props} className={`button ${className ? className : ''}`}>
      {props.children}
    </button>
  );
}

export default Button;
