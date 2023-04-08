import style from "./buttonComp.module.css"

export default function ButtonComp({text, color, background}){
return(
    <>
    <div className={style.body} style={{backgroundColor: background}}>
       <p className={style.btnText} style={{color: color}} >{text}</p> 
        </div>
    </>
)
}