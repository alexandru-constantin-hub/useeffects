import './App.css';
import React, {useState, useEffect} from'react'
import Psychologist from './Components/psychologist'
import Timearea from './Components/timearea'
import Likearea from './Components/likearea'
import Form from './Components/form'

function App() {
  const [psychologists, setPsy] = useState([]);
   //only run once the first time this component is render
   useEffect(()=>{
    if(localStorage.getItem("PsychologistData")){
      setPsy(JSON.parse(localStorage.getItem("PsychologistData")))
    }
   }, [])
   //run every time psychologist state changes
   useEffect(()=>{
     localStorage.setItem("PsychologistData",JSON.stringify(psychologists))
   }, [psychologists])

  return (
    <>
    <Form setPsy={setPsy} />
    <ul>
      {psychologists.map(function(psychologist){
        return <Psychologist setPsy={setPsy} key={psychologist.id} id={psychologist.id} name={psychologist.name} expertise={psychologist.expertise} age={psychologist.age} />
      })}
      
    </ul>
    <Timearea />
    <Likearea />
    </>

  );
}

export default App;
