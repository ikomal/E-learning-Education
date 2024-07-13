import React, { useState } from 'react'


import './html.css'
import { NavLink } from 'react-router-dom'
import  { Basic, Elements } from './htmldata';
import Homee from './htmldata';
export default function Htmldata() {
    const [data,setdata] = useState(null);
    const calldata=(temp)=>
    {
    setdata(temp);
    }
  return (
    <div className='check'>
        <div className="left">

        <ul>
        <li>  <NavLink className="leftbar-title"   onClick={()=>{calldata(<Homee/>)}}>HOME</NavLink>
    </li>
        <li> <NavLink className="leftbar-title"  onClick={()=>{calldata(<Basic/>)}}>INTRODUCTION</NavLink>
    </li>
        <li> <NavLink className="leftbar-title"  onClick={()=>{calldata(<Elements/>)}}>Elements</NavLink>
    </li>
        <li><NavLink className="leftbar-title" to='/htmldata1' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>ELEMENT</NavLink>
    </li>
        <li> <NavLink className="leftbar-title" to='/htmldata2' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>ATTRIBUTES</NavLink>
   </li>
        <li> <NavLink className="leftbar-title" to='/htmldata3' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>HEADING</NavLink>
   </li>
        <li> <NavLink className="leftbar-title" to='/htmldata4' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>STYLES</NavLink>
   </li>
        <li>  <NavLink className="leftbar-title" to='/htmldata5' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>CSS</NavLink>
 </li>
        <li> <NavLink className="leftbar-title" to='/htmldata6' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>LIST</NavLink>
  </li>
        <li>  <NavLink className="leftbar-title" to='/htmldata7' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>TABLE</NavLink>
  </li>
<li>    <NavLink className="leftbar-title" to='/htmldata8' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>FORMATING</NavLink>
 </li>
<li>   <NavLink className="leftbar-title" to='/htmldata9' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>COLORS</NavLink>
 </li>
<li>   <NavLink className="leftbar-title" to='/htmldata10' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>CLASSES</NavLink>
 </li>
<li>        <NavLink className="leftbar-title" to='/htmldata11' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>LAYOUT</NavLink>
   </li>
<li>   <NavLink className="leftbar-title" to='/htmldata12' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>BLOCKS & INLINE</NavLink>
    </li>
<li> <NavLink className="leftbar-title" to='/htmldata13' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>ID</NavLink>
  </li>
<li>   <NavLink className="leftbar-title" to='/htmldata14' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>FOMRS</NavLink>
</li>
<li> <NavLink className="leftbar-title" to='/htmldata15' style={({isActive})=>{return{backgroundColor:isActive?'red':null}}} onClick={()=>{calldata(<Htmldata/>)}}>FOMRS</NavLink>
  </li>

        
        
        </ul>    
        </div>
        <div className="main">
        <h1>{data}</h1>
       
        </div>
    </div>
  )
}
