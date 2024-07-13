
import React, { useState } from 'react'


import '../html.css'
import { NavLink } from 'react-router-dom'
// import Homee, { Basic, Elements } from '../htmldata';
import Htmldata from '../Html';
// import Homee, { Basic, Elements } from './cssdata';
import Homejs, { Basicjs, Elementsjs } from './javascript';

export default function Jsdata() {
    const [data,setdata] = useState(null);
    const calldata=(temp)=>
    {
    setdata(temp);
    }
  return (
    <div className='check'>
        <div className="left">

        <ul>
        <li>  <NavLink className="leftbar-title"    onClick={()=>{calldata(<Homejs/>)}}>Home</NavLink>
    </li>
        <li> <NavLink className="leftbar-title"   onClick={()=>{calldata(<Basicjs/>)}}>Where to</NavLink>
    </li>
        <li> <NavLink className="leftbar-title"   onClick={()=>{calldata(<Elementsjs/>)}}>Outputs</NavLink>
    </li>
        <li><NavLink className="leftbar-title" to='/htmldata1' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>Statements</NavLink>
    </li>
        <li> <NavLink className="leftbar-title" to='/htmldata2' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>Syntax</NavLink>
   </li>
        <li> <NavLink className="leftbar-title" to='/htmldata3' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>Comments</NavLink>
   </li>
        <li> <NavLink className="leftbar-title" to='/htmldata4' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>Variable</NavLink>
   </li>
        <li>  <NavLink className="leftbar-title" to='/htmldata5' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>Let</NavLink>
 </li>
        <li> <NavLink className="leftbar-title" to='/htmldata6' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>Const</NavLink>
  </li>
        <li>  <NavLink className="leftbar-title" to='/htmldata7' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>Variable</NavLink>
  </li>
<li>    <NavLink className="leftbar-title" to='/htmldata8' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>Assignment</NavLink>
 </li>
<li>   <NavLink className="leftbar-title" to='/htmldata9' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>Function</NavLink>
 </li>
<li>   <NavLink className="leftbar-title" to='/htmldata10' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>Object</NavLink>
 </li>
<li>        <NavLink className="leftbar-title" to='/htmldata11' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>Events</NavLink>
   </li>
<li>   <NavLink className="leftbar-title" to='/htmldata12' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>Strings</NavLink>
    </li>
<li> <NavLink className="leftbar-title" to='/htmldata13' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>Callback</NavLink>
  </li>
<li>   <NavLink className="leftbar-title" to='/htmldata14' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>Asynchronous</NavLink>
</li>
<li> <NavLink className="leftbar-title" to='/htmldata15' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>Promices</NavLink>
  </li>

        
        
        </ul>    
        </div>
        <div className="main">
        <h1>{data}</h1>
       
        </div>
    </div>
  )
}
