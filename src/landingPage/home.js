import './home.css'
import './filterPopup.css'

export function Home() {

  const filterPopup = () => {
    const filter = document.getElementById('filterPopup');

    filter.classList.toggle('hide');
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
        <div className='notification gg-bell'></div>
        <div className='UserProfile gg-profile'></div>  
      </div>
    </nav>
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
