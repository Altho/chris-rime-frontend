import style from '../../styles/[slug].module.css'
import ReactPlayer from 'react-player'
import { SimpleGrid } from '@mantine/core';



export default function Media({media}){
    return(
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

                console.dir('---MOVIDEVIDEO---')
                console.dir(video.attributes)
                return(

                    <>
                    <ReactPlayer url={video.attributes.lien} width='100%' height='100%' controls />
                    </>
                )
            })) : null }
        </SimpleGrid>

    )
}