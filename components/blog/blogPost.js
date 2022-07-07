import style from '../../styles/blogList.module.css'
import {marked} from 'marked'
import DOMPurify from 'isomorphic-dompurify'
import parse, { attributesToProps } from 'html-react-parser';
import ReactPlayer from "react-player";




export default function BlogPost({content}) {
    const options = {
        replace: domNode => {
            if (domNode.attribs && domNode.name === 'oembed') {
                const props = attributesToProps(domNode.attribs);
                return <ReactPlayer {...props} width={'100%'}/>;
            }
        }
    };

    const reactContent = parse(content, options)

    return (
        <div className={style.blogPost}><div className="ck-content">
            {reactContent}
    </div></div>)
}