 import InfoPost from "./InfoPost";

 export default function CardPost({ thumbnail, ...infoPost }) {
    return (
        <article>
            <img src={thumbnail} className="rounded-md mb-5" />
            <InfoPost 
                {...infoPost}
            />
        </article>
    );
}