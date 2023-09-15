import React from 'react';
import { useAuth } from '../contexts/authContext'; // Import your authentication context

function Logout() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout(); // Implement the logout function in your context
    } catch (error) {
      console.error('Logout failed', error);
    }
  }

  return (
    <div>
      {user && (
        <div>
          <p>Welcome, {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default Logout;
