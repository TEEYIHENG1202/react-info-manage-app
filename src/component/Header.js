import { useState } from 'react';
import { NavLink,Link } from 'react-router-dom';

function Header()
{
    const [menuOpen,setMenuOpen] = useState(false);
    return (<>
    <header>
        <nav>
            <Link to="dashboard">INFO</Link>
            <div className="menu" onClick={()=>setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen?"open":""}>
                <li>
                    <NavLink to="dashboard">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="whiteList">WhiteList</NavLink>
                </li>
                <li>
                    <NavLink to="blackList">BlackList</NavLink>
                </li>
                <li>
                    <NavLink to="user">User</NavLink>
                </li>
                <li>
                    <NavLink to="profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink to="../../">Logout</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    </>)
}

export default Header;