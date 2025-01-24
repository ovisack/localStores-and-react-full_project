



const About = ({phon,handlePhon}) => {



  
const {png,name}=phon;
    return (



      <>



        <div>
  
            <div className="card bg-orange-200 gap-16 w-auto mt-9  h-auto shadow-xl">
  <figure>
    <img
      src={png}
      alt="Shoes" />
  </figure>
  <div className="card-body">
  
    <p>name: {name}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">click new</button>

      <button className="btn" onClick={()=>handlePhon(phon)}>Select me</button>
    </div>
  </div>
</div>
    

        </div>


        </>
    );
};

export default About;