import style from '../../styles/blogList.module.css'
import {marked} from 'marked'
import DOMPurify from 'isomorphic-dompurify'
import parse from 'html-react-parser';



export default function BlogPost({content}) {

    const reactContent = parse(content)

    return (
        <div className={style.blogPost}><div className="ck-content">
            {reactContent}
    </div></div>)
}