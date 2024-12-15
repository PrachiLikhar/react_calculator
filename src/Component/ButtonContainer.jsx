import style from "./ButtonContainer.module.css"
const ButtonContainer=({onButtonClick})=>{
    const Items=["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","00","."]
        
    return(
        <div className={style.buttonsContainer}>
        {Items.map(items=>
            <button className={style.btnItems} onClick={()=>onButtonClick(items)}>{items}</button>)
}
         
        </div>
    )
    
}
export default ButtonContainer;