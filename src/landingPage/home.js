import './home.css'
import './filterPopup.css'
import './userPopup.css'
import './notifyPopup.css'
import { Link } from "react-router-dom"
import axios from 'axios';
import React, { useState, useEffect } from 'react';

export function Home() {

  const filterPopup = () => {
    const notifyPopup = document.getElementById('NotifyPopup');
    const UserPopup = document.getElementById('UserPopup');
    const filter = document.getElementById('filterPopup');

    filter.classList.toggle('hide');
    UserPopup.classList.add('hide');
    notifyPopup.classList.add('hide');
  }

  const userPopup = () => {
    const notifyPopup = document.getElementById('NotifyPopup');
    const UserPopup = document.getElementById('UserPopup');
    const filter = document.getElementById('filterPopup');

    UserPopup.classList.toggle('hide');
    filter.classList.add('hide');
    notifyPopup.classList.add('hide');
  }

  const NotifyPopup = () => {
    const notifyPopup = document.getElementById('NotifyPopup');
    const UserPopup = document.getElementById('UserPopup');
    const filter = document.getElementById('filterPopup');

    notifyPopup.classList.toggle('hide');
    filter.classList.add('hide');
    UserPopup.classList.add('hide');
  }

  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3001/login/user/name', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setUserName(response.data.name);
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    fetchData();
  }, []);

  return (
  <>
    <nav className="Nav navbar col-12">
      <div className='col-1'>
         <img className='ViralLogo' src='/images/JS.png' alt='LOGO'></img>{/* placeholder logo */}
      </div>
      <div className='SearchGroup d-flex col-5'>
        <div id='Fsearch' onClick={filterPopup}>
          <div className='gg-align-left'></div>
        </div>
        <input className='Tsearch' placeholder='SEARCH...'></input>
        <div id='Bsearch'>
          <div className='gg-search'></div>
        </div>
      </div>
      <div className='d-flex p-5 gap-5'>
        <div className='notification gg-bell' onClick={NotifyPopup}></div>
        <div className='UserProfile gg-profile' onClick={userPopup}></div>  
      </div>
    </nav>
    <div id='NotifyPopup' className='hide'>
        <p>Nothing New yet!</p>
    </div>
    <div id='UserPopup' className='hide'>
        <p><Link to="/user">Profile</Link></p>
        <p><Link to="/settings">Setting</Link></p>
        <p><Link to="/license">L&A</Link></p>
        <p><Link to="/logout">Log Out</Link></p>
        <p><Link to="/friends">Friends</Link></p>
    </div>
    <div id='filterPopup' className='hide'>
        <p>filter</p>
        <p>filter</p>
        <p>filter</p>
        <p>filter</p>
        <p>filter</p>
        <p>filter</p>
        <p>filter</p>
        <p>filter</p>
        <p>filter</p>
        <p>filter</p>
    </div>
    <h1>Welcome, {userName}!</h1>
  </>
  );
}
