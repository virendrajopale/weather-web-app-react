
import './App.css';
import Card from './components/Card';
import {  useState } from 'react';

function App(props) {
  const API_key='3d6b87ecd119a49841d88debd38a4eae'
  const [city,setCity]=useState("delhi")
  const [temp,setTemp]=useState(25)
  const [desc,setDesc]=useState("Weather")
  const [feel,setfeel]=useState(20)
  const [humadity,sethumadity]=useState(70)
  const [pressur,setPressure]=useState(1000)
  const [err,setErr]=useState(0)
  const [photo,setPhoto]=useState("")
  const handleCity=(event)=>{
    event.preventDefault();
    const cty=document.getElementById('search')
    setCity(cty.value);
    // console.log((cty.value))
    
  }
  const getAPI= async ()=>
  {
  try
  {  const api=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`)
    const dat= await api.json();
    setTemp(((dat.main.temp)-273).toFixed(2))
    setDesc((dat.weather.at(0).description))
    setfeel(((dat.main.feels_like)-273).toFixed(2));
    sethumadity(dat.main.humidity);
    setPressure(dat.main.pressure);
    setPhoto((dat.weather.at(0).icon))
    setCity((dat.name)+" "+(dat.sys.country))
    setErr(0)
  }
    catch(error){
      // setCity(`${city} NOT EXIST`);
      setErr(1)
    }
    
  }
  getAPI()

  return (
    <div >
{ (<Card  photo={photo}city={city} temp={temp} desc={desc} feel={feel} humadity={humadity} pressur={pressur} err={err} handleCity={handleCity} />)
 }    
</div>
  );
}

export default App;


