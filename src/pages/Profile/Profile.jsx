import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
// Assume api has updateProfile

const Profile = () => {
  const { user } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [email, setEmail] = useState(user?.email || '');

  const onUpdate = () => {
    // Call updateProfile
    setEditMode(false);
  };

  return (
    <div>
      <h1 className="h1 mb-6">Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {editMode ? (
          <form className="space-y-4">
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Button onClick={onUpdate}>Save</Button>
            <Button variant="secondary" onClick={() => setEditMode(false)}>Cancel</Button>
          </form>
        ) : (
          <>
            <p className="body mb-4">Email: {user.email}</p>
            <Button onClick={() => setEditMode(true)}>Edit Profile</Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;