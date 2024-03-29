import './login.css'
import Signup from "./Signup";
import Login from './Login'
import Logout from './Logout'
import { useState } from "react";
const User = ({currUser, setCurrUser}) => {
    const [show, setShow]=useState(true)
    if(currUser) 
        return (
            <div id="Greeting">
            Hello {currUser.status.data.user.name}
            <Logout setCurrUser={setCurrUser}/>
            </div>
        )
    return (
        <div id="Register" className='offset-6'>
            { show?
                <Login setCurrUser={setCurrUser} setShow={setShow}/>  
                :
                <Signup setCurrUser={setCurrUser}  setShow={setShow} />
            }
        </div>
    )
}
export default User