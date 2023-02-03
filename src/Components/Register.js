import React, {useState} from 'react'



const Register = (props) => {
    const [email, setEmail]=useState('');
    const [pass, setPass]=useState('');
    const [name, setName]=useState('');
    const [date,setDate]=useState();
    
    

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(email);
    }

    

  return (
    <div className='auth-form-container'>
        <h2>Register</h2>
    <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input value={name} onChange={(e)=> setName(e.target.value)} name="name"  id="name" placeholder='Full Name'/>

         <label for="email">Email</label>
        <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>

        <label for="Gender">Gender</label>

        <select className='gender'>
        
        <option selected value="---">-Choose-</option>
          <option value="male">Male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>

        <label for="Faculty">Faculty</label>

        <select className='gender'>
        
        <option selected value="---">-Choose-</option>
          <option value="Mbbs">MBBS</option>
          <option value="Engineering">Engineering</option>
          <option value="Csit">CSIT</option>
          <option value="bba">BBA</option>
          <option value="Mocktest">Mocktest</option>
        </select>

        <label for="semester">Semester</label>

        <select className='gender'>
        
        <option selected value="---">---</option>
          <option value="I semester">I semester</option>
          <option value="II semester">II semester</option>
          <option value="III semester">III semester</option>
          
        </select>

        <label for="Course">Course</label>

        <select className='gender'>
        
        <option selected value="---">-Choose-</option>
          <option value="C-prog">C programming</option>
          <option value="DL">Digital Logic</option>
          <option value="calculus">Calculus</option>
          
        </select>

        <label for="dob">DOB</label>
        <input type="date" onChange={e=>setDate(e.target.value)}/>

        



        <label for="password">Password</label>
        <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="password" id="password" name="password"></input>
        <br/>

        <button type="submit">Register</button>

        
    </form>
    <button  className='link-btn' onClick={() => props.onFormSwitch('Login')}>Already have an account?<strong> Login Here</strong> </button>
    </div>
    
  )
}

export default Register;