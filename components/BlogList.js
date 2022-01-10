import {remark} from 'remark'


export default function  blogList({title, publishedAt, content}){

    async function parseContent() {
        const file = await remark()
            .process(content)

        return String(file)
    }
const parsedBlog = parseContent();
    return(
        <>
            <h1>{title}</h1>
            <h2>{publishedAt}</h2>
            <p>{content}</p>
        </>
    )
}