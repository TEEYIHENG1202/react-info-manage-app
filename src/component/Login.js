import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Confirm from "./Confirm";

function Login({display,setDisplay,UserContext})
{
    const user = useContext(UserContext);
    const navigate = useNavigate();

    function test()
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
    <div className="login">
        <div className="loginForm">
        <h1>Login</h1>
        <form>
            <input type="email" id="email" placeholder="Email" required/><br/>
            <input type="password" id="password" placeholder="Password" required/><br/>
            <input type="submit" onClick={()=>test()} value="Login"/>
            <div className="forgetPW" onClick={()=>setDisplay(true)}>Forget Password!!!</div>
            <div className="defaultEmail">
                <h4>Default Email</h4>
                <li>Manager@123.com : Manager@123</li>
                <li>User@123.com : User@123</li>
            </div>
            {display?<Confirm setDisplay={setDisplay} UserContext={UserContext}/>:""}
        </form>
        </div>
    </div>
    </>)
}

export default Login;