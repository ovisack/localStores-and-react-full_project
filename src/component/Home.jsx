import { useEffect,  useState } from "react";
import { Link,  } from "react-router-dom";
import About from "./About";

import { addToLs, getStoresCart, removeFromLs } from "./local_Stores";

import Data from "./Data";



const Home = () => {

  const [dataBs,setDataBs]=useState([]);

useEffect(()=>{
fetch("data.json")
.then(res=>res.json())
.then(data=>setDataBs(data))





},[])


const [photo,setPhoto]=useState([])
const handlePhon=phon=>{
  const newPhoto=[...photo,phon];
setPhoto(newPhoto)
addToLs(phon.id)
alert("select product  ")

}

//lode cart four local stores 
 useEffect(()=>{

  console.log(dataBs.length);
if(dataBs.length>0){
  const storesCart=getStoresCart();
  console.log(storesCart,dataBs);
const saveCart=[]

  for(const id of storesCart){
    console.log(id);

  const data=dataBs.find(data=>data.id==id)
  if(data){
    saveCart.push(data)
  }
  }
  console.log(saveCart,"sav cart ");
  setPhoto(saveCart)
}
 },[dataBs]) ;





 const handleDelete=id=>{
  const remainingCart=dataBs.filter(data=>data.id!==id);
  setDataBs(remainingCart)
  removeFromLs(id)
 }
    return (
      <>
<h1>photo{photo.length}</h1>
{/*  */}

<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl">Ovisack</a>
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
</div>
{/*   */}
<div className= "grid grid-cols-2  gap-x-48 m-16" >

      <div className="grid md:grid-cols-3 md:w-[800px] h-[10px]">
            {
                dataBs.map(phon=> <About phon={phon} handlePhon={handlePhon}  key={phon.id}> </About>)
            }
</div>
<div className=" w-24">
  <Data photo={photo} handleDelete={handleDelete} ></Data>
</div>

        </div>
        
    


<div className="text-red-900 ">


</div>





       </>
    );

};

export default Home;