import React, {useState} from 'react';
import Card from "./Card";
import { Link } from 'react-router-dom';

function Login(){
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }
    return (
        <Card
        bgcolor="primary"
        header="Login"
          body={
          <>
          <form onSubmit={handleSubmit}>
            <label for='email' className="form">email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
            <label for='password' className="form">password</label>
            <input value={pass} onChange={e => setPass(e.target.value)} type="password" placeholder="******" id="password" name="password"/>
            <button type='submit'>Log In</button>
          </form>
          <Link className="nav-link" to="/create-account">Create Account</Link>  
          </>
          }
        />
    )  
  }
    export default Login;