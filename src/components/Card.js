import React from "react";

function Card(props){
 
 
//  const handleMode=()=>{

//  }
    return(
       <>
    <div className=" card my-5  bg-success " style={{margin:'auto',width:'75%',}}>
<div className="d-flex flex-column justify-content-center text-center text-white p-4">
  <h1>Weather App</h1>
  <div className=" d-flex justify-content-center align-items-center my-5">
  <div className="input-group input-group-lg">
  <input type="text" className="form-control" aria-label="Sizing example input"  id="search"  aria-describedby="inputGroup-sizing-sm"/>
  <button type="submit"  className=" text--center bg-primary text-white fs-2"style={{border:'none', borderTopRightRadius:'10px',borderEndEndRadius:'10px'}} onClick={props.handleCity}>Enter City</button>
</div>
</div>
{/* <div >
  <button className="btn btn" onClick={handleMode}>Dark Mode</button>
</div> */}
    </div>

    <div className="p-3" style={{margin:'auto',width:'65%'}}>
    <div className="card text-center bg-dark text-white ">
    <div className="container text-center">
  <div className="row text-capitalize">
    <div className="col p-5">
     <h1>{props.city}</h1>
     <p className="fw-light fs-6">{props.desc}</p>
    </div>
    <div className="col  p-5"> 
      <img className="p-0" src={`http://openweathermap.org/img/w/${props.photo}.png`} alt="wrr"  />
    </div>
  </div>
  <div className="row ">
    <div className="col p-4">
      <h1 className="fs-1 fw-bold">{props.temp} <sup>o</sup>C</h1>
    </div>
    <div className="col p-4 d-flex d-sm-flex justify-content-between flex-sm-row">
   <span className="">Feels like   <p  className="fw-semibold">{props.feel}<sup>o</sup>C</p></span>
    <span className=""> Humadity <p className="fw-semibold">{props.humadity} %</p></span>
    <span className=""> Pressure    <p className="fw-semibold">{props.pressur} hPs </p></span>
    </div>
  </div>
</div>
</div>
</div>
</div>
    </>
  )
}

export default Card;

