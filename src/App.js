import Login from './component/Login';
import Home from './component/Home';
import Dashboard from './component/Dashboard';
import { createContext, useState, useEffect } from "react";
import { Routes,Route, useNavigate } from 'react-router-dom';
import WhiteList from './component/WhiteList';
import BlackList from './component/BlackList';
import User from './component/User';
import Profile from './component/Profile';

function App() {

  if(!localStorage.getItem("localInfo") || !localStorage.getItem("localWhiteList") || !localStorage.getItem("localBlackList"))
  {
    localStorage.setItem("localInfo",JSON.stringify([{email:"Manager@123.com",password:"Manager@123",role:"Manager"},{email:"User@123.com",password:"User@123",role:"User"}]));
    localStorage.setItem("localWhiteList",JSON.stringify([{name:"whiteList",phone:"000-0000000"}]));
    localStorage.setItem("localBlackList",JSON.stringify([{name:"blackList",phone:"111-1111111"}]));
  }

    var x = JSON.parse(localStorage.getItem("localInfo"));
    var y = JSON.parse(localStorage.getItem("localWhiteList"));
    var z = JSON.parse(localStorage.getItem("localBlackList"));
    const [display,setDisplay]=useState(false);
    const [infos,setInfos]=useState(x);
    const [whiteList,setWhiteList]=useState(y);
    const [blackList,setBlackList]=useState(z);
    const [user,setUser]=useState();
    const [isDisabled, setIsDisabled] = useState();
    const UserContext = createContext();

    useEffect(()=>{
    localStorage.setItem("localInfo",JSON.stringify(infos));
    },[infos]);

    useEffect(()=>{
      localStorage.setItem("localWhiteList",JSON.stringify(whiteList));
    },[whiteList]);

    useEffect(()=>{
      localStorage.setItem("localBlackList",JSON.stringify(blackList));
    },[blackList]);

    return (
    <>
      <UserContext.Provider value={{infos,setInfos,whiteList,setWhiteList,blackList,setBlackList,user,setUser,isDisabled,setIsDisabled}}>
        <Routes>
          <Route path="/" element={<Login display={display} setDisplay={setDisplay} UserContext={UserContext}/>}/>
          <Route path="home" element={<Home UserContext={UserContext}/>}>
            <Route index element={<Dashboard UserContext={UserContext}/>}/>
            <Route path="dashboard" element={<Dashboard UserContext={UserContext}/>}/>
            <Route path="whiteList" element={<WhiteList UserContext={UserContext}/>}/>
            <Route path="blackList" element={<BlackList UserContext={UserContext}/>}/>
            <Route path="user" element={<User UserContext={UserContext}/>}/>
            <Route path="profile" element={<Profile UserContext={UserContext}/>}/>
          </Route>
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;