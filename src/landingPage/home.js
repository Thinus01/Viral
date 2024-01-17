import './home.css'
import './filterPopup.css'
import './userPopup.css'
import './notifyPopup.css'

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
        <p>Profile</p>
        <p>Setting</p>
        <p>L&A</p>
        <p>Log Out</p>
        <p>Friends</p>
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
  </>
  );
}
