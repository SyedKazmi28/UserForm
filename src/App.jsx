import { useState } from "react";

function App() {

  const [userData,setUserData] = useState({
    name:'',
    email:'',
    password:''
  })
  const [user,setUser] = useState([])

  console.log(user);

  const [isSubmitted,setIsSubmitted] = useState(false)
  function getUserInput(e) {
    //  console.log(e.target);
    const {name,value} = e.target
     
    setUserData((prevState)=>({...prevState,[name]:value}))

  }
   
  const handleSubmit=(e)=>{
    e.preventDefault()

    
    // console.log(userData);
    if(userData.name&&userData.email&&userData.password){
      setIsSubmitted(true)
      setUser((prev)=>([...prev,userData]))

      setUserData({
        name:'',
        email:'',
        password:''
      })
    }
    else{
      
      alert('please fill all fields')
    }
  }

  
 
  return (
    <>
    <div className="container">
    <div className="user-form">
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-input">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" value={userData.name} onChange={getUserInput}></input>
        </div>
        <div className="user-input">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={userData.email} onChange={getUserInput}></input>
        </div>
        <div className="user-input">
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" value={userData.password} onChange={getUserInput}></input>
        </div>
        <button>Submit</button>
      </form>
      </div>
      <div className="user-container">
       {isSubmitted&&(<div className="userdata">
      
         {user?.map((data,index)=>(
          <div className="data" key={index}>
          <p>Name:<span>{data.name}</span></p>
        <p>Email:<span>{data.email}</span></p>
        <p>Password:<span>{data.password}</span></p> 
        </div>
         ))}
        
      </div>)}
      </div>
      </div>
    </>
  );
}

export default App;
