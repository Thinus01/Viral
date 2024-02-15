// import { useState } from 'react';
// import './login.css';
// import axios from 'axios';

// export const SignUp = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignUp = async () => {
//     try {
//       const response = await axios.post('http://127.0.0.1:3001/signup', {
//         user: {
//           name: name,
//           email: email,
//           password: password
//         }
//       });
//       console.log('Signup Successful', response.data);
//     } catch (error) {
//       console.error('Signup Failed', error.response.data);
//     }
//   };
//   return (
//     <>
//       <div id='SignUp'>
//         <p>Sign up</p>
//         <input placeholder='Name' onChange={(e) => setName(e.target.value)} />
//         <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
//         <input placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)} />
//         <button className='SignButton' type='button' onClick={handleSignUp}>
//           Submit
//         </button>
//       </div>
//     </>
//   );
// }
