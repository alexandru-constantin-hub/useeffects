import React, { useState } from "react"

function ComponentName() {
    const [likes, setLikes] = useState(0);
    function increaseLikes() {
        setLikes(prev=>{
            return prev + 1;
        });
    }
    function decreaseLikes() {
        setLikes(prev=>{
            if(prev > 0){
                return (prev - 1)
            }
            return 0; 
        
        });
    }
    

  return (
    <>
    <button onClick={increaseLikes}>Increase likes</button>
    <button onClick={decreaseLikes}>Decrease likes</button>
    <h2>This page has been liked {likes} times.</h2>
    </>
  )
}

export default ComponentName