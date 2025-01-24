import { data, Link } from "react-router-dom";
import Navbar from "./Navbar";





const Data = ({photo,handleDelete}) => {
    
    // console.log(photo.length,"ami photo blo ci ");






    return (
<>
<p className="text-2xl  mr-7 font-bold w-full text-cyan-500">Total={photo.length}</p>
        <div className="mt-14">

          {
 photo.map(phon=> <div><img  phon={phon} src={phon.png} alt="" /> <p>{phon.name} ami</p> <button onClick={()=>handleDelete(phon.id)}>delete</button> <Navbar></Navbar> </div> )




}
        </div>
        
        <div> <Link  to={"/data"}></Link></div>
        </>
    );
};

export default Data;