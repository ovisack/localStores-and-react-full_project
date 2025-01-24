import React, { useRef, useState } from 'react';

const Navbar = () => {

    const [data,setData]=useState([]);

const inputRef=useRef(null)


const handleInput= ()=>{
  

const newPost=[...data,inputRef.current.value]
setData(newPost);

}

const handleDelete=()=>{
    const newPost=[...data,inputRef.current.value]
setData(newPost);
 
}

    return (
        <>
        <div>
            <div>
                {data.map(item=><div ><h2 item={item}> {item}</h2> <button className='btn' onClick={handleDelete}> delete data</button>  </div> )} 
            </div>
 
  {/* <div>
     {data.filter(items=><button items={items}> {items} delete</button>)} 
  </div> */}


<input data={data} className=" btn hover:bg-red-200" placeholder='typ me all value' ref={inputRef} type="text" name="" id="" />        
          <button className='btn mt-3' onClick={()=>handleInput(inputRef)}>summit</button>
        
        </div>
        </>

    );
};

export default Navbar;