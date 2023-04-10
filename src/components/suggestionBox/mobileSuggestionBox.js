import style from "./suggestionBox.module.css"

export default function MobileSuggestionBox(){
    return(
        <>
        <div className={style.suggestContainerMobile}>
            <div className={style.mobileUpperContainer}>
                <div className={style.imgContainerMobile}>Img</div>
                <span className={style.headingMobile}>The Authority</span>
            </div>
           
            <div className={style.textContainerMobile}>

                <span className={style.bodyMobile}>
                The Star Wars Trilogy Special Edition was a theatrical anniversary edition of the original trilogy, in order to celebrate the 20th anniversary of the release of Star Wars: Episode IV A New Hope.
                </span>
                <span className={style.linkMobile}>link</span>
            </div>
        </div>
       
        </>
    )
}