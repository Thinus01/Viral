import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './landingPage/home';
import { Friends } from './friends/friends';
import { Logout } from './logout/logout';
import { UserProfile } from './userProfile/userProfile';
import { UserSettings } from './userSettings/userSettings';
import { License } from './license/license';
import getUserFromToken from './landingPage/auth';

const App = () => {
  const [currUser, setCurrUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');

      if (token) {
        const user = await getUserFromToken(token);
        setCurrUser(user);
      }

      setLoading(false); // Set loading state to false once data is fetched
    };

    fetchData();
  }, []);

  if (loading) {
    // Render loading indicator or any other initial loading state
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Home currUser={currUser} />} />
      <Route path="/user" element={<UserProfile />} />
      <Route path="/settings" element={<UserSettings />} />
      <Route path="/license" element={<License />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/friends" element={<Friends />} />
    </Routes>
  );
};

export default App;
