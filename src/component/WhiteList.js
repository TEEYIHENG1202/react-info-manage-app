import { useContext } from "react";

function WhiteList({UserContext})
{
    const user = useContext(UserContext);

    const createNewWhiteList = (event) =>{
        event.preventDefault();
        var x=true;
        for(let i=0;i<user.whiteList.length;i++)
        {
            if(user.whiteList[i].name===document.whiteListForm.whiteListName.value)
            {
                x=false;
                break;
            }
        }

        if(x)
        {
            user.setWhiteList(whiteList=> {return [...whiteList,{name:document.whiteListForm.whiteListName.value,phone:document.whiteListForm.whiteListPhone.value}]})
        }
    }

    const removeWhiteList = (name) => {
        user.setWhiteList(user.whiteList.filter(whiteList=> whiteList.name!==name));
    }

    return (<>
    <div className="whiteListContainer">
    <div className="whiteListManage">
        <h1>Create New WhiteList</h1>
        <form name="whiteListForm" className="whiteListForm" onSubmit={(event)=>{createNewWhiteList(event)}}>
            <div><div className="formText">Name</div><input type="text" name="whiteListName" className="whiteListName" placeholder="whiteListName" required disabled={user.isDisabled}/></div>
            <div><div className="formText">Phone Number</div><input type="text" name="whiteListPhone" className="whiteListPhone" placeholder="000-0000000" pattern="[0-9]{3}-[0-9]{7}" required disabled={user.isDisabled}/></div>
            <div><input type="submit" value="Submit" disabled={user.isDisabled}/><input type="reset" value="Reset" disabled={user.isDisabled}/></div>
        </form>
    </div>
    <div className="whiteListContent">
        <table className="whiteListTable" border="1">
            <tbody>
            <tr><th>Name</th><th>Phone Number</th><th>Action</th></tr>
            {user.whiteList.map(whiteList=><tr key={whiteList.name}><td>{whiteList.name}</td><td>{whiteList.phone}</td><td><input style={{width:"100%"}} type="button" value="Delete" onClick={()=>removeWhiteList(whiteList.name)} disabled={user.isDisabled}/></td></tr>)}
            </tbody>
        </table>
    </div>
    </div>
    </>)
}

export default WhiteList;