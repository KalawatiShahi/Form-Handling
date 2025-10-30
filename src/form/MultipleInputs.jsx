import React from 'react'; 
import  {useState} from 'react';
import '../App.css'
const MultipleInputs = ()=>{

    const [userRegistraction, setUserRegistraction] = useState({
        username:"",
        email:"",
        phone:"",
        password:""
    });

    const [record, setRecord] = useState([]);

    const handleInput=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        console.log(name,value)

        setUserRegistraction({...userRegistraction, [name]:value});

    }

        const handleSubmit =(e)=>{
            e.preventDefault();

        const newRecord = {...userRegistraction, id : new Date().getTime().toString()}
        setRecord([...record, newRecord]);
        setUserRegistraction({username:"", email:"", phone:"", password:""});
        }


    return(
        <>
            <form action='' onSubmit={handleSubmit}>
                <div >
                    <label htmlFor='username'>FullName</label>
                    <input type='text' autoComplete='off' 
                value= {userRegistraction.username}
                      onChange={handleInput}
                    name='username' id='username'/>
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='text' autoComplete='off'
                    value={userRegistraction.email}
                     onChange={handleInput}
                     name='email' id='email'/>
                </div>
                <div>
                    <label htmlFor='phone'>Phone</label>
                    <input type='text' autoComplete='off'
                    value={userRegistraction.phone}
                    onChange={handleInput}
                     name='phone' id='phone'/>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' autoComplete='off'
                    value={userRegistraction.password}
                     onChange={handleInput}
                     name='password' id='password'/>
                </div>
                <button type='submit'>Registraction</button>
            </form>

            <div>
        {record.map((curElem) => {
          const { id, username, email, phone, password } = curElem;
          return (
            <div className='showDataStyle' key={id}>
              <p><strong>Name:</strong> {username}</p>
              <p><strong>Email:</strong> {email}</p>
              <p><strong>Phone:</strong> {phone}</p>
              <p><strong>Password:</strong> {password}</p>
              <hr />
            </div>
          );
                    })
                }
            </div>
        </>
    )
}

export default MultipleInputs;
