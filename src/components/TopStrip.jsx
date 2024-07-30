import React,{useState,useEffect} from 'react'

export default function TopStrip() {
    const [show, setShow] = useState(false)
    useEffect(() => {
      const intervalId = setInterval(() => {
        setShow(!show);
      }, 3000);
  
      return () => {
        clearInterval(intervalId); // Clean up the interval
      };
    }, [show]);
  return (
    <div className='bg-black h-14 flex justify-center items-center text-2xl'>
        {show?<p className='text-white'>
            Get 30% off on your First Order Use code:'FIRST30'

        </p>:<p className='text-white'>End of Season Sale</p>}
    </div>
  )
}

