import React from "react"



function ComponentName(props) {
    function handleDelete(){
        props.setPsy(prev => prev.filter(psy => psy.id !== props.id))
    }
  return (
      <>
    <li>Psychologist name: {props.name}, expertise: {props.expertise}, age:{props.age}, id:{props.id}</li>
    <button onClick={handleDelete}>Delete</button>
    </>
  )
}

export default ComponentName