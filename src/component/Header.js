import { NavLink } from 'react-router-dom';

function Header()
{
    return (<>
    <div className="header">
        <nav>
            <NavLink to="dashboard">Dashboard</NavLink>
            <NavLink to="whiteList">WhiteList</NavLink>
            <NavLink to="blackList">BlackList</NavLink>
            <NavLink to="user">User</NavLink>
            <NavLink to="profile">Profile</NavLink>
            <NavLink to="../../">Logout</NavLink>
        </nav>
    </div>
    </>)
}

export default Header;