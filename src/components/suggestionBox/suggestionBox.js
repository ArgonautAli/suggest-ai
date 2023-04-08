import style from "./suggestionBox.module.css"

export default function SuggestionBox(){
    return(
        <>
        <div className={style.suggestContainer}>
            <div className={style.imgContainer}>Img</div>
            <div className={style.textContainer}>
                <span className={style.heading}>The Authority</span>
                <span className={style.body}>
                The Star Wars Trilogy Special Edition was a theatrical anniversary edition of the original trilogy, in order to celebrate the 20th anniversary of the release of Star Wars: Episode IV A New Hope.
                </span>
                <span className={style.link}>link</span>
            </div>
        </div>
       
        </>
    )
}