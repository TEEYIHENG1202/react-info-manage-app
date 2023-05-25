import { useContext } from "react";

function User({UserContext})
{
    const user = useContext(UserContext);

    const createNewUser = (event) =>{
        event.preventDefault();
        var x=true;
        if( document.userForm.password.value!==document.userForm.confirmPassword.value )
        {
            alert("Email can't repeat and password must same as confirm password!!!");
        }
        else
        {
            for(let i=0;i<user.infos.length;i++)
            {
                if(user.infos[i].email===document.userForm.email.value)
                {
                    x=false;
                    break;
                }
            }

            if(x)
            {
                user.setInfos(info=> {return [...info,{email:document.userForm.email.value,password:document.userForm.password.value,role:document.userForm.role.value}]})
            }
        }
    }

    const removeUser = (email) => {
        user.setInfos(user.infos.filter(info=> info.email!==email));
    }



    return (<>
    <div className="userContainer">
    <div className="userManage">
        <h1>Create New User</h1>
        <form name="userForm" className="userForm" onSubmit={(event)=>{createNewUser(event)}}>
            <div><div className="formText">Email</div><input type="email" name="email" className="email" placeholder="Email" required disabled={user.isDisabled}/></div>
            <div><div className="formText">Password</div><input type="password" name="password" className="password" placeholder="Password" pattern="(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$"  
                title="1 lowercase, 1 uppercase, 1 digit, 1 symbol and length at least 8 " required disabled={user.isDisabled}/></div>
            <div><div className="formText">Confirm Password</div><input type="password" name="confirmPassword" className="confirmPassword" pattern="(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$"
                title="1 lowercase, 1 uppercase, 1 digit, 1 symbol and length at least 8 " placeholder="Confirm Password" required disabled={user.isDisabled}/></div>
            <div><div className="formText">Role</div>
            <select name="role" required disabled={user.isDisabled}>
                <option value=""></option>
                <option value="Manager">Manager</option>
                <option value="User">User</option>
                </select></div>
            <div><input type="submit" value="Submit" disabled={user.isDisabled}/><input type="reset" value="Reset" disabled={user.isDisabled}/></div>
        </form>
    </div>
    <div className="userContent">
    <table className="userTable" border="1">
        <tbody>
        <tr><th>Email</th><th>Role</th><th>Action</th></tr>
        {user.infos.map((info)=><tr key={info.email}><td>{info.email}</td><td>{info.role}</td><td><input style={{width:"100%"}} type="button" value="Delete" onClick={()=>removeUser(info.email)} disabled={user.isDisabled}/></td></tr>)}
        </tbody>
    </table>
    </div>
    </div>
    </>)
}

export default User;