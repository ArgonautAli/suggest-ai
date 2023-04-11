import style from "./suggestionBox.module.css"
import Link from "next/link"
import Image from "next/image"


export default function MobileSuggestionBox({suggImage, suggHeading, suggBio, suggLink}){
    return(
        <>
        <div className={style.suggestContainerMobile}>
            <div className={style.mobileUpperContainer}>
                {/* <div className={style.imgContainerMobile}>Img</div> */}
                {suggImage &&   <Image src={suggImage} height={250} width={200} className={style.imgContainerMobile} alt="Poster"/>}
              
                <span className={style.headingMobile}>{suggHeading}</span>
            </div>
           
            <div className={style.textContainerMobile}>

                <span className={style.bodyMobile}>
                {suggBio}                </span>
                {suggLink && <span className={style.linkMobile}><Link href={suggLink?.split(":")[1]} target="_blank">
                    {suggLink}
                    </Link></span>}
                
            </div>
        </div>
       
        </>
    )
}