import { display, style } from '@mui/system'
import React, { useState,useMemo ,useRef} from 'react'
import { useSelector } from 'react-redux'

export default function Search() {
    const [value,setValue]=useState("")
    const [displ,setdispl]=useState(true)
    const handleChange=(e)=>{
        setValue(e.target.value)
    }
    let filteredData=[]
    const men=useSelector((state)=> state.MensCloth.value)
    const Women=useSelector((state)=> state.WomensCloth.value)
    const Genral=useSelector((state)=> state.Genral.value)
  const allData= useMemo(()=>{ return [...men,...Women,...Genral]},[men,Women,Genral])
  console.log(allData)
filteredData=useMemo(()=>{
  if(value.length>0){
    
    return  allData.filter((item)=>item.
    title
    .toLowerCase().includes(value.toLowerCase()));}
    else{
        return []
    }
        


  },[allData,value])
  console.log(filteredData)
  const divRef = useRef(null);

  const handleBlur = () => {
    setdispl(false);
  };

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setdispl(false);
    }
  };
  
    

  return (
    <div className='relative cursor-pointer'>
        <div className='flex flex-col '>
          <form className="ml-8">
            <input
              type="text"
              value={value}
              onChange={handleChange}
              className="border border-black rounded-lg text-center font-light h-12 w-[400px] cursor-text"
              placeholder="Search"
              onFocus={() => setdispl(true)}
              onBlur={handleBlur}
              
            ></input>
          </form>
          <div className='ml-9 rounded-md bg-white w-[400px] h-[100px] overflow-scroll z-50 absolute  top-12 shadow-md' style={{display:filteredData.length>0&&displ?'block':'none'}} ref={divRef}>
          {filteredData.length>0&&filteredData.map((item,index)=>(
                    <div key={index} className='flex justify-start ml-3'>
                        <div className=''>
                        <img className='w-8 h-4' src={item.images[0]} loading='lazy'/>
                        </div>
                        <div>
            <li className='list-none hover:underline hover:text-blue-800'>{item.title}</li>
            </div>
            
         </div>
            
        ))}
       </div>

        </div>
    </div>
  )
}
