import {format} from "date-fns";
import Method from "./method";
export default function ShowMethods({methods}) {


    return(

        methods.map((method)=> {
            const id = method.id;

            const url = method.attributes.cover.data['0'].attributes.url;
            const name = method.attributes.name;
            const link = method.attributes.slug;
            const date = format(new Date(method.attributes.date), 'yyyy');
            return(
                <Method  url = {url} methodName={name} methodDate={date} key={id} link={link}/>

            )
        }))



}