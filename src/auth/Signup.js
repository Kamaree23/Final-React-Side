import React, {setState} from 'react'

export default function Signup() {

    const SignEmUp = async (e) => {
        e.preventDefault(); 

    // const [fname, setFirstName] = useState("");
    // const [lname, setLastName] = useState("");     
    // const [username, setUsername] = useState("");     
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmpassword, setConfirmPassword] = useState("");
        const fname = e.target.lname.value
        const lname = e.target.lname.value
        const username = e.target.username.value
        const email = e.target.email.value
        const password = e.target.password.value
        const confirmpassword = e.target.confirmpassword.value

        if (password !== confirmpassword){
            return
        }
        const res = await fetch('http://localhost:5000/api/signup', {
            method: 'POST',
            body: JSON.stringify({
                fname: fname,
                lname: lname,
                username: username,
                password: password,
                email: email,    
            }),
            headers:{
                "Content-Type": 'application/json'
            }
        });
        const data = await res.json();
        console.log(data)
    }
    
  return (
    <div>
        <h1>Sign Up</h1>
            <form onSubmit={(e) => { SignEmUp(e) }}>
                <input placeholder='First Name' name='fname' className='form-control' type='text' />
                <input placeholder='Last Name' name='lname' className='form-control' type='text' />
                <input placeholder='Username' name='username' className='form-control' type='text' />
                <input placeholder='Email' name='email' className='form-control' type='email' />
                <input placeholder='Password' name='password' className='form-control' type='password' />
                <input placeholder='Confirm Password' name='confrimpassword' className='form-control' type='password' />
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
    </div>
  )
}
