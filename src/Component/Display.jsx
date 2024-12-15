import style from "./Display.module.css"
function Display({displayvalue}){
    return(
<input  className={style.inputText}  
      type="text" value={displayvalue} readOnly/>
    )
}
export default Display;