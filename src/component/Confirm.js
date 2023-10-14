import { useContext } from "react";

function Confirm({UserContext})
{
    const user = useContext(UserContext);

    function restore()
    {
        localStorage.setItem("localInfo",JSON.stringify([{email:"Manager@123.com",password:"Manager@123",role:"Manager"},{email:"User@123.com",password:"User@123",role:"User"}]));

        var info = localStorage.getItem("localInfo");
        user.setInfos(JSON.parse(info));
        user.setDisplay(false);
    }

    return (<>
    <div className="confirm">
        <div className="close" onClick={()=>user.setDisplay(false)}>X</div>
        <h1>Confirm</h1>
        <div>
            Note : If click OK button will remove all emails.
            And restore the default email.
            <ul>
                <li>Manager@123.com : Manager@123</li>
                <li>User@123.com : User@123</li>
            </ul>
        </div>
        <input type="button" onClick={restore} value="OK"/>
    </div>
    </>)
}

export default Confirm;