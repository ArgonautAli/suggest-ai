import style from "./buttonComp.module.css"

export default function ButtonComp({text, color, background, buttonSelected, setButtonSelected}){
return(
    <>
    <div className={style.body}  onClick={()=>setButtonSelected(text)} style={buttonSelected === text?{border:"5px solid white", backgroundColor: background}:{backgroundColor: background}}>
       <p className={style.btnText} style={{color: color}} >{text}</p> 
        </div>
    </>
)
}