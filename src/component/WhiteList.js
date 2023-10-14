import { useContext } from "react";

function WhiteList({UserContext})
{
    const user = useContext(UserContext);

    const createNewWhiteList = (event) =>{
        event.preventDefault();

        var repeatUser = user.whiteLists.filter(object=>{return object.name===document.whiteListForm.whiteListName.value;});
        if(repeatUser.length>0)
        {
            alert("This name already exist!!!");
        }
        else
        {
            user.setWhiteLists(whiteList=> {return [...whiteList,{name:document.whiteListForm.whiteListName.value,phone:document.whiteListForm.whiteListPhone.value}]})
        }
    }

    const removeWhiteList = (name) => {
        user.setWhiteLists(user.whiteLists.filter(whiteList=> whiteList.name!==name));
    }

    return (<>
    <div className="whiteListContainer">
        <form name="whiteListForm" className="whiteListForm" onSubmit={(event)=>{createNewWhiteList(event)}}>
            <h1>Create New WhiteList</h1>
            <div><label className="formText" htmlFor="whiteListName">Name</label><input type="text" name="whiteListName" id="whiteListName" className="whiteListName" placeholder="whiteListName" required disabled={user.isDisabled}/></div>
            <div><label className="formText" htmlFor="whiteListPhone">Phone Number</label><input type="text" name="whiteListPhone" id="whiteListPhone" className="whiteListPhone" placeholder="000-0000000" pattern="[0-9]{3}-[0-9]{7}" required disabled={user.isDisabled}/></div>
            <div><input type="submit" value="Submit" disabled={user.isDisabled}/><input type="reset" value="Reset" disabled={user.isDisabled}/></div>
        </form>
        <div className="whiteListContent">
            <table className="whiteListTable" border="1">
                <tbody>
                <tr><th>Name</th><th>Phone Number</th><th>Action</th></tr>
                {user.whiteLists.map(whiteList=><tr key={whiteList.name}><td>{whiteList.name}</td><td>{whiteList.phone}</td><td><input type="button" value="Delete" style={{width:"100%"}} onClick={()=>removeWhiteList(whiteList.name)} disabled={user.isDisabled}/></td></tr>)}
                </tbody>
            </table>
        </div>
    </div>
    </>)
}

export default WhiteList;