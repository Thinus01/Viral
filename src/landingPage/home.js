import './home.css'

export function Home() {
  return (
  <>
    <nav className="Nav navbar col-12">
      <img className='p-2' src='/images/JS.png' alt='LOGO'></img>
      <div className='SearchGroup d-flex col-5 gap-5'>
        <div className='Fsearch gg-align-left'></div>
        <input className='Tsearch' placeholder='SEARCH...'></input>
        <div className='Bsearch gg-search'></div>
      </div>
      <div className='d-flex p-5 gap-5'>
        <div className='notification gg-bell'></div>
        <div className='UserProfile gg-profile'></div>  
      </div>
    </nav>
  </>
  );
}