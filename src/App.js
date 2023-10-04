import React ,{useState,useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import UserTable from './tableData';
import LogoLoader from './logoloader';
import { useSelector } from 'react-redux';

function App() {
  const [isLoading, setIsLoading]=useState(true)
  const users=useSelector((state)=>state.users)

  // useEffect(()=>{
  //   setIsLoading(users?.loading);
  // },[])

  return (
    <>
     
<UserTable></UserTable>
    </>
  );
}

export default App;
