import Image from "next/image"
import style from "./suggestionBox.module.css"
import Link from "next/link"

export default function SuggestionBox({suggImage, suggHeading, suggBio, suggLink}){
    return(
        <>
        <div className={style.suggestContainer}>
            {/* <div className={style.imgContainer}/> */}
            {suggImage && <Image src={suggImage} className={style.imgContainer} height={250} width={200} alt="poster"/>}
                
            <div className={style.textContainer}>
                <span className={style.heading}>{suggHeading}</span>
                <span className={style.body}>
                {suggBio}
                </span>
                {suggLink &&  <span className={style.link}>
                    <Link href={suggLink?.split(":")[1]} target="_blank">
                    {suggLink}
                    </Link>
                    
                </span>}
               
            </div>
        </div>
       
        </>
    )
}