import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios"
import { useState } from 'react';
function App(){
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
   const callApi = async()=>{
        try{
           const Data =await axios.get("http://localhost:8000")
           console.log(Data)
        }
        catch(error){
           console.log("Error was detected", error);
        }
   }

  return(
    <div>
      <h1>Login Page</h1>
      <div>
        <label htmlFor="userName">Name</label>
        <br/>
        <input type="text" id="userName" placeholder="password" className='input' onChange={((e)=>setUserName(event.target.value))}/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <br/>
        <input type="password"id="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <button className='btn btn-primary' onClick={callApi}>Click</button>
    </div>
  )
}
export default App