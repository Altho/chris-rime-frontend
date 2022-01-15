import style from '../../styles/blogList.module.css'
import {marked} from 'marked'
import DOMPurify from 'isomorphic-dompurify'

export default function BlogPost({content}) {
    const parsed = DOMPurify.sanitize(marked.parse(content))
    return (<div dangerouslySetInnerHTML ={{ __html: parsed }} className={style.blog}>

    </div>)
}