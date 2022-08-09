import './App.css';
import Feeds from './components/Feeds';
import Sidebar from './components/Sidebar';
import Trends from './components/Trends';
import Profile from './components/Profile';
import SignUp from './components/SignUp';

import { UserContext } from './UserContext';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const BASE_URL = 'https://robot-twitter.herokuapp.com/api/v2/';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
    if (loginDetails) {
      setUser(loginDetails.user);
    }
  }, []);
  console.log(user);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <>
        {user ? (
          <div className="app">
            <Sidebar />

            <Routes>
              <Route path="/" element={<Feeds />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
            <Trends />
          </div>
        ) : (
          <SignUp />
        )}
      </>
    </UserContext.Provider>
  );
}

export default App;
