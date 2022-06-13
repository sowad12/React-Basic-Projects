import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Loading from './Loading';
import Tours from './Tours';


const url = 'https://course-api.com/react-tours-project';
const FetchData = () => {
  const[loading,setLoading]=useState(true);
  const[tourData,setTourData]=useState([]);

  useEffect(()=>{
    // setLoading(true);
    const fetch=async()=>{
      try{
         const res=await axios(url);
         setTourData(res.data);
         setLoading(false);
      }
      catch(err){
        setLoading(false);
          console.log(err);
      }
    }
    fetch()
  },[])  

if(loading){
 return(
  <>
    <Loading/>
  </>
 )
}



  return (
  <>
   <Tours Tours={tourData}/>
  </>
  )
}
export default FetchData;