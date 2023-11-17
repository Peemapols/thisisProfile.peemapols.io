import React from 'react';

const TextAreaComponent = () => {
    return (
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" cols="50"></textarea>
      </div>
    );
  };

  export default TextAreaComponent
  