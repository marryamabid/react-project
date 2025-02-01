import React, { useContext } from "react";
import UserContext from "./Context/UserContext";


function Profile() {
    const {user} =useContext(UserContext)
        
        
        if (!user) return<div>please Login..</div>
        return <h1 className="text-white">welcome {user.username}</h1>

}
export default Profile