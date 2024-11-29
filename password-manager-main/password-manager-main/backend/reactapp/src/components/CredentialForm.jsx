import React, { useState } from 'react';

const CredentialForm = ({ onSave }) => {
  const [website, setWebsite] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ website, username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Credential</h3>
      <div>
        <label>Website</label>
        <input 
          type="text" 
          value={website} 
          onChange={(e) => setWebsite(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Username</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Password</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Save Credential</button>
    </form>
  );
};

export default CredentialForm;
