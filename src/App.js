import './App.css';
import Feeds from './components/Feeds';
import Sidebar from './components/Sidebar';
import Trends from './components/Trends';
import Profile from './components/Profile';

import { Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';

function App() {
  return (
    // <SignUp />
    <div className="app">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Feeds />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Trends />
    </div>
  );
}

export default App;
