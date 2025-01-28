



const About = ({phon,handlePhon}) => {



  
const {png,name}=phon;
    return (



      <>



        <div >
  
            <div className="cart bg-red-300  gap-16  mt-9 w-auto mx-auto  h-auto shadow-xl">
  <figure className="">
    <img
      src={png}
      alt="Shoes" />
  </figure>
  <div className="card-body">
  
    <p>name: {name}</p>
    {/* <div className="card-actions justify-end"> */}
      <button className="btn btn-primary md:w-44">click new</button>

      <button className="btn md:w-44"  onClick={()=>handlePhon(phon)}>Select me</button>
    {/* </div> */}
  </div>
</div>
    

        </div>


        </>
    );
};

export default About;