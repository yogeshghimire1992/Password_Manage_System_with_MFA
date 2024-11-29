import React, { useState } from 'react';

const PasswordGenerator = ({ onGenerate }) => {
  const [length, setLength] = useState(12);

  const handleGenerate = () => {
    let password = '';
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    onGenerate(password);
  };

  return (
    <div>
      <h3>Password Generator</h3>
      <div>
        <label>Length: </label>
        <input 
          type="number" 
          value={length} 
          onChange={(e) => setLength(e.target.value)} 
          min="8" 
          max="20" 
        />
      </div>
      <button onClick={handleGenerate}>Generate Password</button>
    </div>
  );
};

export default PasswordGenerator;
