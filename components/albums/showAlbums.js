import {format} from "date-fns";
import Album from "./Album";
import Link from 'next/link'
export default function ShowAlbums({albums}) {
    return(

        albums.map((album)=> {
            const url = album.attributes.image.data.attributes.url;
            const name = album.attributes.name;
            const link = album.attributes.slug;
            const date = format(new Date(album.attributes.date), 'yyyy');
            return(
                <Album url = {url} albumTitle={name} albumDate={date} key={url} link={link}/>

            )
        }))


}