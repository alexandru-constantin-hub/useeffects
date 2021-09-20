import React, {useState, useEffect} from "react"


function Timearea() {
    const [theTime, setTheTime] = useState(new Date().toLocaleString())
    useEffect(() => {
     const interval = setInterval(()=>setTheTime(new Date().toLocaleString()), 1000)
     return ()=>clearInterval(interval)
      }, [])
  return (
    <p>
        The curent time is: {theTime}
    </p>
  )
}

export default Timearea