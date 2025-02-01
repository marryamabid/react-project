import React, { useState ,useContext} from "react";
import UserContext from "./Context/UserContext";

function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const {setUser}=useContext(UserContext);

    const eventHandler= (e)=>{
       e.preventDefault()
       setUser({username,password})
    }
    return (
        <>
        <div>Login</div>
        <input type="text" placeholder="username" value={username}
        onChange={(e)=>setUsername(e.target.value)} />
        {  "   " }
        <input type="text" placeholder="password" value={password}
        onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={eventHandler}>Submitt</button>
        </>
    )
}
export default  Login