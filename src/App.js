import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './landingPage/home';
import { Friends } from './friends/friends';
import { Logout } from './logout/logout';
import { UserProfile } from './userProfile/userProfile';
import { UserSettings } from './userSettings/userSettings';
import { License } from './license/license';
import { SignIn } from './login/SignIn';

function App() {
  return <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/user" element={<UserProfile />}/>
    <Route path="/settings" element={<UserSettings />}/>
    <Route path="/license" element={<License />}/>
    <Route path="/logout" element={<Logout />}/>
    <Route path="/friends" element={<Friends />}/>
    <Route path="/signIn" element={<SignIn />}/>
  </Routes>
}

export default App;
