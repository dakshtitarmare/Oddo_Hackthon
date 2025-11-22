import React, { createContext, useState, useEffect } from 'react';
import { login, signup, logout, getCurrentUser } from '../utils/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleLogin = async (credentials) => {
    const data = await login(credentials);
    setUser(data.user);
  };

  const handleSignup = async (credentials) => {
    const data = await signup(credentials);
    setUser(data.user);
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, handleLogin, handleSignup, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;