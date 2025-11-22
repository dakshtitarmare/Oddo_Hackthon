import React, { useState } from 'react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
// Assume api has verifyOtp

const OtpVerification = () => {
  const [otp, setOtp] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    // Call verifyOtp from api
    alert('OTP verified');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[var(--linen)]">
      <form onSubmit={onSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="h3">OTP Verification</h2>
        <Input value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" />
        <Button type="submit">Verify</Button>
      </form>
    </div>
  );
};

export default OtpVerification;