import React,{useState} from 'react';
import"./App.css";
const App = () => {
  const[show,setShow]=useState(true);
  return (
    <div>
       <center>
      {
        
        
        show?<h1>Welcome To My Page
                 
        </h1>:null
      
      
        }
    
      <button onClick={()=>setShow(!show)}>Show</button>
      
      <button onClick={()=>setShow(!show)}>Hide</button>
      </center>
<app/>
    </div>
  )
}

export default App;