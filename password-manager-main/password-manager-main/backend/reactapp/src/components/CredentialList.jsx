import React from 'react';

const CredentialList = ({ credentials }) => {
  return (
    <div>
      <h3>Your Credentials</h3>
      <ul>
        {credentials.map((cred) => (
          <li key={cred.id}>
            <strong>{cred.website}</strong>
            <div>Username: {cred.username}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CredentialList;
