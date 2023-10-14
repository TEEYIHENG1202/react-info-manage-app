import { useContext } from "react";

function BlackList({UserContext})
{
    const user = useContext(UserContext);

    const createNewBlackList = (event) =>{
        event.preventDefault();
        var repeatUser = user.blackLists.filter(object=>{return object.name===document.blackListForm.blackListName.value;});
        if(repeatUser.length>0)
        {
            alert("This name already exist!!!");
        }
        else
        {
            user.setBlackLists(blackList=> {return [...blackList,{name:document.blackListForm.blackListName.value,phone:document.blackListForm.blackListPhone.value}]})
        }
    }

    const removeBlackList = (name) => {
        user.setBlackLists(user.blackLists.filter(blackList=> blackList.name!==name));
    }   

    return (<>
    <div className="blackListContainer">
            <form name="blackListForm" className="blackListForm" onSubmit={(event)=>{createNewBlackList(event)}}>
                <h1>Create New BlackList</h1>
                <div><label className="formText" htmlFor="blackListName">Name</label><input type="text" name="blackListName" id="blackListName" className="whiteListName" placeholder="blackListName" required disabled={user.isDisabled}/></div>
                <div><label className="formText" htmlFor="blackListPhone">Phone Number</label><input type="text" name="blackListPhone" id="blackListPhone" className="whiteListPhone" pattern="[0-9]{3}-[0-9]{7}" placeholder="000-0000000" required disabled={user.isDisabled}/></div>
                <div><input type="submit" value="Submit" disabled={user.isDisabled}/><input type="reset" value="Reset" disabled={user.isDisabled}/></div>
            </form>
        <div className="blackListContent">
            <table className="blackListTable" border="1">
                <tbody>
                    <tr><th>Name</th><th>Phone Number</th><th>Action</th></tr>
                    {user.blackLists.map(blackList=><tr key={blackList.name}><td>{blackList.name}</td><td>{blackList.phone}</td><td><input style={{width:"100%"}} type="button" value="Delete" onClick={()=>removeBlackList(blackList.name)} disabled={user.isDisabled}/></td></tr>)}
                </tbody>
            </table>
        </div>
    </div>
    </>)
}

export default BlackList;