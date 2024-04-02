import React, { useState } from 'react';

function Login({setUser}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
   
    if (username !== '' && password !== '') {
        setUser(username)
    //   setIsLoggedIn(true);
    } else {
      alert('Please enter a valid username and password');
    }
  };

  return (
    <div>
      
        <p className='title'>Login</p>
        
        <form onSubmit={handleLogin}>
         <div className='top'>
         <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required/>
          </label>
         </div>
          
         <div className='bottom'>
         <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </label>
         </div>
          <br />
          <button type="submit" className='btn btn-success'>Login</button>
        </form>
      
    </div>
  );
}

export default Login;
