import style from '../../styles/[slug].module.css'
import ReactPlayer from 'react-player'
import { SimpleGrid } from '@mantine/core';



export default function Media({media}){
    let keyIndex = 0
    let getKey = () => {
        keyIndex = keyIndex + 1
        return keyIndex

    };
    return(
        < div style={{position: 'relative'}}>
        <div className={style.video}>-VIDEOS-</div>
        <SimpleGrid
            cols={4}
            spacing="lg"
            className={style.media}
            breakpoints={[
                { maxWidth: 980, cols: 3, spacing: 'md' },
                { maxWidth: 755, cols: 2, spacing: 'sm' },
                { maxWidth: 600, cols: 1, spacing: 'sm' },
            ]}
        >
            {media ? (media.map((video) =>{


                return(

                    <>
                    <ReactPlayer url={video.attributes.lien} key ={getKey} width='100%' height='100%' controls />
                    </>
                )
            })) : null }
        </SimpleGrid>
        </div>

    )
}