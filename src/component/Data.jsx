





const Data = ({photo,handleDelete}) => {
    
    // console.log(photo.length,"ami photo blo ci ");






    return (
<>
<div className=" -ml-96">


</div>
<p className="text-2xl  mr-7 font-bold w-full text-cyan-500">Total={photo.length}</p>
        <div className="mt-14">

          {
 photo.map(phon=> <div><img  phon={phon} src={phon.png} alt="" /> <p>{phon.name} ami</p> <button onClick={()=>handleDelete(phon.id)}>delete</button>  </div> )




}
        </div>
        
      
        </>
    );
};

export default Data;