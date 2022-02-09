import React ,{useState,useEffect}from "react";
import "./Dashbord.css"
export const Dashbord =() =>{
    const[colr,setColr]= useState("green");
    const [dist,setDist]= useState(0);
    const [time,setTime]= useState(0);
    useEffect(()=>{
    const speed = dist/time;
    speed <40 && setColr("green");
    speed <50 && speed >40 && setColr("orange");
    speed >50 && setColr("red");
    dist  <0 && setColr("blue"); time <0 && setColr ("blue");

    
    },[dist,time]);
    return(
        <div className="speed">
        Distance: <input type="number" onChange={e=> setDist(e.target.value)} />
        
        Time : <input type="number"onChange={e=> setTime(e.target.value)} />
        
        <div className="light" style={{backgroundColor: colr}}>
            <p>{dist}km</p>
            <p>{time}hours</p>
        </div>
        
        </div>
    )
}