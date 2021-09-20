import React, {useState} from "react"

function Form(props) {
    const [name, setName] = useState();
    const [expertise, setExpertise] = useState();
    const [age, setAge] = useState();
    const [id, setId] = useState();



    function handleSubmit(e){
        e.preventDefault()
        setId(id+1)
        props.setPsy(prev => prev.concat({name, expertise, age, id}))
    }

  return (
      
    <form onSubmit={handleSubmit}>
        <label for="pname">Name:</label><br></br>
         <input type="text" id="pname" name="pname" onChange={e => setName(e.target.value)}></input><br></br>
         <label for="expertise">Expertise:</label><br></br>
        <input type="text" id="expertise" name="expertise" onChange={e => setExpertise(e.target.value)}></input><br></br><br></br>
        <label for="age">Age:</label><br></br>
        <input type="number" id="age" name="age" onChange={e => setAge(e.target.value)}></input><br></br><br></br>
        <input type="submit" value="Submit"></input>
    </form>
  )
}

export default Form