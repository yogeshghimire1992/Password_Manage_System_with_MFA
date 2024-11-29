import React, { useState } from 'react';
import { enableMFA, generateQR } from '../services/authService';

const MFASetup = ({ user }) => {
  const [qrCode, setQrCode] = useState(null);
  const [otp, setOtp] = useState('');

  const handleEnableMFA = async () => {
    try {
      const qr = await generateQR(user);
      setQrCode(qr);  // Set generated QR code
    } catch (error) {
      console.error('Error enabling MFA', error);
    }
  };

  const handleVerifyMFA = async () => {
    try {
      await enableMFA(user, otp);  // Verify OTP and enable MFA
    } catch (error) {
      console.error('MFA verification failed', error);
    }
  };

  return (
    <div>
      <h2>Enable MFA</h2>
      <button onClick={handleEnableMFA}>Generate QR for MFA</button>
      {qrCode && <img src={qrCode} alt="QR Code for MFA" />}
      <div>
        <label>Enter OTP</label>
        <input 
          type="text" 
          value={otp} 
          onChange={(e) => setOtp(e.target.value)} 
          required 
        />
      </div>
      <button onClick={handleVerifyMFA}>Verify OTP</button>
    </div>
  );
};

export default MFASetup;
