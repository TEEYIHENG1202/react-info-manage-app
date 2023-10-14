import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Confirm from "./Confirm";

function Login({UserContext})
{
    const user = useContext(UserContext);
    const navigate = useNavigate();

    const test = () =>
    {
        for(let i=0;i<user.infos.length;i++)
        {
            if(document.getElementById("email").value===user.infos[i].email && document.getElementById("password").value===user.infos[i].password)
            {
                user.setUser(i);
                if(user.infos[i].role!=="Manager")
                {
                    user.setIsDisabled(true);
                }
                else
                {
                    user.setIsDisabled(false);
                }
                navigate("home");
            }
        }
    }

    return (<>
    <div className="loginContainer">
        <div className="loginForm">
        <h1>Login</h1>
        <form>
            <input type="email" id="email" placeholder="Email" required/><br/>
            <input type="password" id="password" placeholder="Password" required/><br/>
            <input type="submit" onClick={test} value="Login"/>
            <div className="forgetPW" onClick={()=>user.setDisplay(true)}>Forget Password!!!</div>
            <div className="defaultEmail">
                <h4>Default Email</h4>
                <ul>
                <li>Manager@123.com : Manager@123</li>
                <li>User@123.com : User@123</li>
                </ul>
            </div>
            {user.display?<Confirm UserContext={UserContext}/>:""}
        </form>
        </div>
    </div>
    </>)
}

export default Login;