import { useContext } from "react";

function BlackList({UserContext})
{
    const user = useContext(UserContext);

    const createNewBlackList = (event) =>{
        event.preventDefault();
        var x=true;
        for(let i=0;i<user.blackList.length;i++)
        {
            if(user.blackList[i].name===document.blackListForm.blackListName.value)
            {
                x=false;
                break;
            }
        }

        if(x)
        {
            user.setBlackList(blackList=> {return [...blackList,{name:document.blackListForm.blackListName.value,phone:document.blackListForm.blackListPhone.value}]})
        }
    }

    const removeBlackList = (name) => {
        user.setBlackList(user.blackList.filter(blackList=> blackList.name!==name));
    }   

    return (<>
    <div className="blackListContainer">
    <div className="blackListManage">
        <h1>Create New BlackList</h1>
        <form name="blackListForm" className="blackListForm" onSubmit={(event)=>{createNewBlackList(event)}}>
            <div><div className="formText">Name</div><input type="text" name="blackListName" className="whiteListName" placeholder="blackListName" required disabled={user.isDisabled}/></div>
            <div><div className="formText">Phone Number</div><input type="text" name="blackListPhone" className="whiteListPhone" pattern="[0-9]{3}-[0-9]{7}" placeholder="000-0000000" required disabled={user.isDisabled}/></div>
            <div><input type="submit" value="Submit" disabled={user.isDisabled}/><input type="reset" value="Reset" disabled={user.isDisabled}/></div>
        </form>
    </div>
    <div className="blackListContent">
        <table className="blackListTable" border="1">
            <tbody>
                <tr><th>Name</th><th>Phone Number</th><th>Action</th></tr>
                {user.blackList.map(blackList=><tr key={blackList.name}><td>{blackList.name}</td><td>{blackList.phone}</td><td><input style={{width:"100%"}} type="button" value="Delete" onClick={()=>removeBlackList(blackList.name)} disabled={user.isDisabled}/></td></tr>)}
            </tbody>
        </table>
    </div>
    </div>
    </>)
}

export default BlackList;