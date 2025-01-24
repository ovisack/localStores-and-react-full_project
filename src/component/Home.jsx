import { useEffect,  useState } from "react";
import { Link,  } from "react-router-dom";
import About from "./About";

import { addToLs, getStoresCart, removeFromLs } from "./local_Stores";
import Navbar from "./Navbar";
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


        <div className=" flex justify-between">
      
  
      
  
    <button className="text-4xl bg-orange-400 btn glass" >Phon </button>




  
  <div className="navbar-center hidden lg:flex">
    
      <Link  to={"/data"}>About{photo.length}</Link>
      
      
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
  
</div>

<div>

<Navbar ></Navbar>

</div>

        <div className="grid md:grid-cols-3 md:w-[1020px] h-[10px]">
            {
                dataBs.map(phon=> <About phon={phon} handlePhon={handlePhon}  key={phon.id}> </About>)
            }
        </div>
        
        <div className="grid ml-[1100px]  mt-8  ">


<div className="w-72 grid grid-cols-4 gap-5 ">
{/* 
  {
 photo.map(phon=> <div><img  phon={phon} src={phon.png} alt="" /> <p>{phon.name}</p> </div> )
//  photo.map(phon=> <Data phon={phon}   key={phon.id}></Data>  )



} */}

<Data photo={photo} handleDelete={handleDelete} ></Data>
<div className="text-red-900 ">


</div>


</div>
</div>

       </>
    );

};

export default Home;