import React,{useState} from 'react'

const Login = (props) => {
    const [email, setEmail]=useState('');
    const [pass, setPass]=useState('');

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(email);
    }

  return (
    <div className='auth-form-container'>
        <h2>Login</h2>
    <form className="login-form" onSubmit={handleSubmit}>
         <label for="email">Email</label>
        <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>

        <label for="password">Password</label>
        <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="password" id="password" name="password"></input>

        <button type="submit">Log In</button>

        
    </form>
    <button className='link-btn' onClick={() => props.onFormSwitch('Register')}>Don't have an account?<strong>Register Here</strong></button>
    </div>
  )
}

export default Login; 