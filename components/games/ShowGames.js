import {format} from "date-fns";
import Game from "./game";

export default function ShowGames({games}) {


    return(

        games.map((game)=> {
            const id = game.id;
            const url = game.attributes.image.data.attributes.url;
            const name = game.attributes.name;
            const link = game.attributes.slug;
            const date = format(new Date(game.attributes.release), 'yyyy');
            return(
                <Game  url = {url} gameName={name} gameDate={date} key={id} link={link}/>

            )
        }))



}