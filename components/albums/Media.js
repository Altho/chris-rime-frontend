import style from '../../styles/[slug].module.css'
import ReactPlayer from 'react-player'


export default function Media({media}){
console.log('media video')
    console.log(media)
    return(
        <div className={style.media}>
            {media ? (media.map((video) =>{return(
                <div key={video.attributes.lien} className={style.player}>
                    <ReactPlayer url={video.attributes.lien} width='100%' height='100%' controls />
                </div>)
            })) : null }

        </div>
    )
}