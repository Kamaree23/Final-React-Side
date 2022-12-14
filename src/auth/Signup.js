import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';

export default class SignUp extends Component {

    sendSignUpInfo = async (e) => {
        e.preventDefault();

        const username = e.target.username.value
        const fname = e.target.fname.value
        const lname = e.target.lname.value
        const email = e.target.email.value
        const password = e.target.password.value
        const password2 = e.target.password2.value

        if (password !== password2) {
            console.log('password dont match')
            return 
        }

        const res = await fetch('http://localhost:5000/api/signup', {
            method: "POST",
            body: JSON.stringify({
                username: username,
                email: email,
                fname: fname,
                lname: lname,
                password: password
            }),
            headers: {
                "Content-Type": 'application/json'
            }
        });
        const data = await res.json();
        if (data.status==='ok'){
            // #redirect
            // show msg
            
            
        }
        console.log(data)

        const navigate = useNavigate()

        function redirect  ()  {
            
          navigate("/login")
        }
    }


    
    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={(e) => { this.sendSignUpInfo(e) }}>
                    <input placeholder='First Name' name='fname' className='form-control' type='text' />
                    <input placeholder='Last Name' name='lname' className='form-control' type='text' />
                    <input placeholder='Username' name='username' className='form-control' type='text' />
                    <input placeholder='Email' name='email' className='form-control' type='email' />
                    <input placeholder='Password' name='password' className='form-control' type='password' />
                    <input placeholder='Confirm Password' name='password2' className='form-control' type='password' />
                    <button type='submit' onClick={redirect} className='btn btn-primary' >Submit</button>
                </form>
            </div>
        )
    }
}