import { useContext } from "react";

function Profile({UserContext})
{
    const user = useContext(UserContext);
    return (<>
    <div className="profile">
        <h1>Profile</h1>
        <table className="profileTable">
            <tbody>
                <tr><th>Email</th><td>{user.infos[user.user].email}</td></tr>
                <tr><th>Role</th><td>{user.infos[user.user].role}</td></tr>
            </tbody>
        </table>
    </div>
    </>)
}

export default Profile;