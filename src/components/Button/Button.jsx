import React from 'react';

function Button({ className, ...props }) {
  return (
    <button {...props} className={`button ${className ? className : ''}`}>
      {props.children}
    </button>
  );
}

export default Button;
