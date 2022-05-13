import ReactPlayer from "react-player";
import style from '../../styles/preview.module.css'
export default function Preview({preview}){
    return(
        <div className={style.videoContainer}>
        <ReactPlayer className={style.videoPlayer} url={preview} width='100%' height='100%' controls />
        </div>
    )
}