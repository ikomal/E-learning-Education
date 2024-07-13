
import React, { useState } from 'react'


import '../html.css'
import { NavLink } from 'react-router-dom'
// import Homee, { Basic, Elements } from '../htmldata';
import Htmldata from '../Html';
import Homee, { Basic, Elements } from './cssdata';

export default function Cssdata() {
    const [data,setdata] = useState(null);
    const calldata=(temp)=>
    {
    setdata(temp);
    }
  return (
    <div className='check'>
        <div className="left">

        <ul>
        <li>  <NavLink className="leftbar-title"    onClick={()=>{calldata(<Homee/>)}}>Home</NavLink>
    </li>
        <li> <NavLink className="leftbar-title"   onClick={()=>{calldata(<Basic/>)}}>INTRODUCTION</NavLink>
    </li>
        <li> <NavLink className="leftbar-title"   onClick={()=>{calldata(<Elements/>)}}>Syntax</NavLink>
    </li>
        <li><NavLink className="leftbar-title" to='/htmldata1' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>Selectors</NavLink>
    </li>
        <li> <NavLink className="leftbar-title" to='/htmldata2' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>Comments</NavLink>
   </li>
        <li> <NavLink className="leftbar-title" to='/htmldata3' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>Colors</NavLink>
   </li>
        <li> <NavLink className="leftbar-title" to='/htmldata4' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>Background</NavLink>
   </li>
        <li>  <NavLink className="leftbar-title" to='/htmldata5' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>Borders</NavLink>
 </li>
        <li> <NavLink className="leftbar-title" to='/htmldata6' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>Margins</NavLink>
  </li>
        <li>  <NavLink className="leftbar-title" to='/htmldata7' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>Padding</NavLink>
  </li>
<li>    <NavLink className="leftbar-title" to='/htmldata8' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>Height/Weight</NavLink>
 </li>
<li>   <NavLink className="leftbar-title" to='/htmldata9' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>Box-Model</NavLink>
 </li>
<li>   <NavLink className="leftbar-title" to='/htmldata10' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>Outline</NavLink>
 </li>
<li>        <NavLink className="leftbar-title" to='/htmldata11' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>Texts</NavLink>
   </li>
<li>   <NavLink className="leftbar-title" to='/htmldata12' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>Font</NavLink>
    </li>
<li> <NavLink className="leftbar-title" to='/htmldata13' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>Icons</NavLink>
  </li>
<li>   <NavLink className="leftbar-title" to='/htmldata14' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>Links</NavLink>
</li>
<li> <NavLink className="leftbar-title" to='/htmldata15' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>Tables</NavLink>
  </li>

        
        
        </ul>    
        </div>
        <div className="main">
        <h1>{data}</h1>
       
        </div>
    </div>
  )
}
