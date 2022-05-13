import {format} from "date-fns";
import Movie from "./Movie";

export default function ShowMovies({movies}) {


    return(

        movies.map((movie)=> {
            const id = movie.id;
            const url = movie.attributes.image.data.attributes.url;
            const name = movie.attributes.name;
            const auteur = movie.attributes.auteur
            const duree = movie.attributes.duree
            const link = movie.attributes.slug;
            const date = format(new Date(movie.attributes.date), 'yyyy');
            return(
                <Movie  url = {url} movieName={name} movieDate={date} key={id} link={link}/>

            )
        }))



}