import React, {  useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";

function Signin() {

  const [tests, setTests] = useState([]);

  const get_tests = async () => {
    try{
      const rep = await fetch('http://localhost:8082/get')
      const data = await rep.json()
      setTests(data)
    } catch (err) {
      console.error(`Error : ${err}`)
    }
  }
  useEffect(() => {
    get_tests()
  }, [])

    return (
      <div className="Signin">
        <h1 className='title'>
          Committed to Simplicity.
        </h1>
        <form action="">
          <label htmlFor="signinEmail">Email</label>
          <input name='signinEmail' type="email" placeholder='Entre your email address'/>
          <div className='pswline'>
            <label htmlFor="signinEmail">Password</label>
            <Link className='linkpsw'>Having trouble signing in?</Link>
          </div>
          <input name='signinPassword' type="password" placeholder='Entre your password'/>
          <Link className='signinbtn'>Sign in</Link>
          <div className='or'>
            <div></div>
            <p>Or</p>
            <div></div>
          </div>
          <Link className='signingoogle'> <FcGoogle /> Sign in with Google</Link>
        </form>
        {/* {tests.map((test) => (
            <h1 className='test' key={test.id}>
            name : <span>{test.name}</span>
            <br />
            id : <span>{test.id}</span>
            </h1>
        ))} */}
      </div>
    )
  }
  
  export default Signin