export default function InfoPost({
    category,
    date,
    title,
    sortDescription,
    authorAvatar,
    authorName,
    authorJob
}) {
    return (
        <>
            <div className="flex items-center text-white/70 space-x-4">
                <div className="uppercase"> 
                    {category}
                </div>
                <span>&bull;</span>
                <div>
                    {date}
                </div>
            </div>
            <h2 className="text-2xl mt-4">{title}</h2>
            <p className="text-white/60 text-base mt-4 w-8/12">{sortDescription}</p>
            <div className="flex items-center mt-5">
                <img src={authorAvatar} className="w-14 h-14 rounded-full object-cover" />
                <div className="ml-4">
                    <h3 className="text-white">{authorName}</h3>
                    <div className="text-white/60">{authorJob}</div>
                </div>
            </div>
        </>
    );
}