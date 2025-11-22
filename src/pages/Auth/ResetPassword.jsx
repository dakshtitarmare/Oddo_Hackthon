import React, { useState } from 'react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { validatePassword } from '../../utils/validators';
// Assume api has resetPassword

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (validatePassword(password) && password === confirmPassword) {
      // Call resetPassword from api
      alert('Password reset');
    } else {
      alert('Invalid password or mismatch');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[var(--linen)]">
      <form onSubmit={onSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="h3">Reset Password</h2>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New Password" />
        <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
        <Button type="submit">Reset</Button>
      </form>
    </div>
  );
};

export default ResetPassword;