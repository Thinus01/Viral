import { useState, useRef } from "react";

const Login = ({ setCurrUser, setShow }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef();

  const login = async (userInfo) => {
    const url = "https://viral-backend.onrender.com/login";
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "post",
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify(userInfo)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Invalid username or password');
      localStorage.setItem("token", response.headers.get("Authorization"));
      setCurrUser(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      "user": { email: data.email, password: data.password }
    };
    setError('');
    await login(userInfo);
    formRef.current.reset();
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShow(false);
  };

  return (
    <div id="Greeting">
      <div className="InOrUp d-flex">
        <a className="Entry ELeft selected" href="#login">Login</a>
        <a className="Entry ERight unselected" href="#signup" onClick={handleClick}>Signup</a>
      </div>
      <form className="UserDetail" ref={formRef} onSubmit={handleSubmit}>
        <input className="offset-1 UserEmail" type="email" name="email" placeholder="email" /><br />
        <input className="offset-1 UserPass" type="password" name="password" placeholder="password" /><br />
        <input className="offset-1 UserSubmit" type="submit" value="Login" />
      </form>
      {error && <p className="LoadingLog">{error}</p>}
      <br />
      {loading && <div className="LoadingLog">Loading...</div>}
    </div>
  );
};

export default Login;
