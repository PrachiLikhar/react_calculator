
import style from "./App.module.css"
import Display from "./Component/Display"
import ButtonContainer from "./Component/ButtonContainer"
import { useState } from "react"

function App() {
  const [calcvalue,setCalcvalue]=useState("");
const onButtonClick=(buttonText)=>
{if(buttonText==='C'){
setCalcvalue("")
}
else if(buttonText==='='){
  const result=eval(calcvalue)
setCalcvalue (result);
}
else{
  const newdisplayvalue =calcvalue+buttonText;
  setCalcvalue(newdisplayvalue);
}
}
  return (
    <>
     <div className={style.calculator}>
     <Display displayvalue={calcvalue}/>
    <ButtonContainer onButtonClick={onButtonClick}
      />
      
     </div>
    </>
  )
}

export default App
