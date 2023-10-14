import { createContext, useState, useEffect } from "react";
import { Routes,Route } from 'react-router-dom';
import Login from './component/Login';
import Home from './component/Home';
import Dashboard from './component/Dashboard';
import WhiteList from './component/WhiteList';
import BlackList from './component/BlackList';
import User from './component/User';
import Profile from './component/Profile';

const UserContext = createContext();

function App() {

  useEffect(()=>{
    if(!localStorage.getItem("localInfo"))
    {
      localStorage.setItem("localInfo",JSON.stringify([{email:"Manager@123.com",password:"Manager@123",role:"Manager"},{email:"User@123.com",password:"User@123",role:"User"}]));
    }
  },[]);

  var info = JSON.parse(localStorage.getItem("localInfo"));
  var whiteList = JSON.parse(localStorage.getItem("localWhiteList"));
  var blackList = JSON.parse(localStorage.getItem("localBlackList"));
  const [infos,setInfos]=useState(info);
  const [whiteLists,setWhiteLists]=useState(whiteList??[]);
  const [blackLists,setBlackLists]=useState(blackList??[]);
  const [display,setDisplay]=useState(false);
  const [user,setUser]=useState();
  const [isDisabled, setIsDisabled] = useState();
  useEffect(()=>{
  localStorage.setItem("localInfo",JSON.stringify(infos));
  },[infos]);

  useEffect(()=>{
    localStorage.setItem("localWhiteList",JSON.stringify(whiteLists));
  },[whiteLists]);

  useEffect(()=>{
    localStorage.setItem("localBlackList",JSON.stringify(blackLists));
  },[blackLists]);

  return (
    <>
      <UserContext.Provider value={{infos,setInfos,whiteLists,setWhiteLists,blackLists,setBlackLists,display,setDisplay,user,setUser,isDisabled,setIsDisabled}}>
        <Routes>
          <Route path="/" element={<Login UserContext={UserContext}/>}/>
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