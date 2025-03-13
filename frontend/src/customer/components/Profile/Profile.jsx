import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const userId = localStorage.getItem('_id');  // Retrieve user ID from localStorage (replace with your logic)

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!userId) {
        setError('User not logged in');
        return;
      }
      try {
        const response = await axios.get(`http://localhost:5000/api/profile/${_id}`, {
          // withCredentials: true,  // Add this if you're using cookies for auth
        });
        setUserData(response.data);
      } catch (err) {
        setError('Error fetching user profile');
        console.error(err);
      }
    };

    fetchUserProfile();
  }, [_id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile">
      <h1>User Profile</h1>
      <p><strong>First Name:</strong> {userData.firstName}</p>
      <p><strong>Last Name:</strong> {userData.lastName}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Mobile:</strong> {userData.mobile}</p>
    </div>
  );
};

export default Profile;
