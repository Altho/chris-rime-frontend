import {
    EmailShareButton,
    FacebookShareButton,
    PinterestShareButton,
    RedditShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
} from "react-share";
import {useRouter} from "next/router";



export default function Share(){
return(
    <FacebookShareButton url={'www.google.fr'} />
)
}