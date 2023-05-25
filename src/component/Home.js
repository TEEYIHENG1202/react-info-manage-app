import Header from "./Header";
import { Outlet } from 'react-router-dom';


function Home()
{
    return (<>
    {
        <div className="main">
            <Header/>
            <div className="sub">
                <Outlet/>
            </div>
        </div>
    }
    </>)
}

export default Home;