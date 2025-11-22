import React, { useState } from 'react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { validateEmail } from '../../utils/validators';
// Assume api has forgotPassword

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      // Call forgotPassword from api
      alert('Reset link sent');
    } else {
      alert('Invalid email');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[var(--linen)]">
      <form onSubmit={onSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="h3">Forgot Password</h2>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <Button type="submit">Send Reset Link</Button>
      </form>
    </div>
  );
};

export default ForgotPassword;