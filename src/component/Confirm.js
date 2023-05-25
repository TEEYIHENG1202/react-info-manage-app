import { useContext } from "react";

function Confirm({setDisplay,UserContext})
{
    const user = useContext(UserContext);

    function restore()
    {
        localStorage.setItem("localInfo",JSON.stringify([{email:"Manager@123.com",password:"Manager@123",role:"Manager"},{email:"User@123.com",password:"User@123",role:"User"}]));

        var x = localStorage.getItem("localInfo");
        user.setInfos(JSON.parse(x));
        setDisplay(false);
    }

    return (<>
    <div className="confirm">
        <div className="close" onClick={()=>setDisplay(false)}>X</div>
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