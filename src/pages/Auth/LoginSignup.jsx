import React, { useState } from 'react';
import FlipCard from '../../components/FlipCard';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import useAuth from '../../hooks/useAuth';
import { validateEmail, validatePassword } from '../../utils/validators';

const LoginForm = ({ flip }) => {
  const { handleLogin } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email) && validatePassword(password)) {
      handleLogin({ email, password });
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <h2 className="h3">Login</h2>
      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <Button type="submit">Login</Button>
    </form>
  );
};

const SignupForm = ({ flip }) => {
  const { handleSignup } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email) && validatePassword(password) && password === confirmPassword) {
      handleSignup({ email, password });
    } else {
      alert('Invalid input or passwords do not match');
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <h2 className="h3">Signup</h2>
      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
      <Button type="submit">Signup</Button>
    </form>
  );
};

const LoginSignup = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[var(--linen)]">
      <FlipCard front={<LoginForm />} back={<SignupForm />} />
    </div>
  );
};

export default LoginSignup;