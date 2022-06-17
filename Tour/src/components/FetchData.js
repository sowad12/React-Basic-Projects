import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Loading from './Loading';
import Tours from './Tours';
import '../css/RemoveTour.css' 

const url = 'https://course-api.com/react-tours-project';
const FetchData = () => {
  const[loading,setLoading]=useState(true);
  const[tourData,setTourData]=useState([]);
 const removeTour=(id)=>{
const newTour=tourData.filter((data)=>{
  return data.id!=id
})
setTourData(newTour)
 }

    const fetch=async()=>{
      setLoading(true)
      try{
         const res=await axios(url);
        //  console.log(res.data);
         setTourData(res.data);
         setLoading(false);
      }
      
      catch(err){
           setLoading(false);
          console.log(err);
      }
    }
    

  useEffect(()=>{
fetch()
  },[])

if(loading){
 return(
  <>
    <Loading/>
  </>
 )
}
if(tourData.length===0){
  return(
   <div>
       <div className="rmContainer">
         <h1>No Tour Left</h1>
         <button className='btnRf' onClick={()=>fetch()}>Refresh</button>
       </div>
   </div>
  )
  
}


  return (
  <>
   <Tours tours={tourData} removeTour={removeTour}/>
  </>
  )
}
export default FetchData;