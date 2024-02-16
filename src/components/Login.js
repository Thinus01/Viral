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
      <form ref={formRef} onSubmit={handleSubmit}>
        Email: <input type="email" name="email" placeholder="email" />
        <br />
        Password: <input type="password" name="password" placeholder="password" />
        <br />
        <input type="submit" value="Login" />
      </form>
      {error && <p>{error}</p>}
      <br />
      <div>Not registered yet, <a href="#signup" onClick={handleClick}>Signup</a></div>
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default Login;
