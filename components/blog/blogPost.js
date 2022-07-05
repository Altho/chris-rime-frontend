import style from '../../styles/blogList.module.css'
import {marked} from 'marked'
import DOMPurify from 'isomorphic-dompurify'


export default function BlogPost({content}) {
    const parsed = DOMPurify.sanitize(content)
    return (
        <div className={style.blogPost}><div dangerouslySetInnerHTML ={{ __html: parsed }} className="ck-content">

    </div></div>)
}