import { useState, useRef } from "react";
const Signup=({setCurrUser, setShow})=>{
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef()
  const signup=async (userInfo, setCurrUser)=>{
    const url="https://viral-backend.onrender.com/signup"
    try{
      setLoading(true);
      const response=await fetch(url, {
        method: 'post',
        headers: {
          "content-type": 'application/json',
          "accept": "application/json"
        },
        body: JSON.stringify(userInfo)
      }) 
      const data=await response.json()
      if(!response.ok) throw data.error
      localStorage.setItem('token', response.headers.get("Authorization"))
      setCurrUser(data)
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  const Redirect = () => {

  }

    const handleSubmit=e=>{
        e.preventDefault()
        const formData=new FormData(formRef.current)
        const data=Object.fromEntries(formData)
        const userInfo={
            "user":{ name: data.name,email: data.email, password: data.password }
        }
        signup(userInfo, setCurrUser)
        e.target.reset()
        setTimeout(Redirect, 300);
    }
    const handleClick=e=>{
        e.preventDefault()
        setShow(true)
    }

    return(
      <div id="Greeting">
        <div className="InOrUp d-flex">
          <a className="Entry ELeft unselected" href="#login" onClick={handleClick} >Login</a>
          <a className="Entry ERight selected" href="#signup">Signup</a>
        </div>
      <form className="UserDetail" ref={formRef} onSubmit={handleSubmit}>
          <input className="offset-1 UserName" type="name" name='name' placeholder="name" /><br />
          <input className="offset-1 UserEmail" type="email" name='email' placeholder="email" /><br />
          <input className="offset-1 UserPass" type="password" name='password' placeholder="password" /><br />
          <input className="offset-1 UserSubmit" type='submit' value="Submit" />
      </form>
      {error && <p className="LoadingLog">{error}</p>}
      <br />
      {loading && <div className="LoadingLog">Loading...</div>}
      <br />
        
    </div>
    )
}
export default Signup