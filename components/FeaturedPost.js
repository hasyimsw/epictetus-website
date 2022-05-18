export default function FeaturedPost() {
    return(
        <article>
            <div className="flex -mx-4 items-center justify-center">
                <div className="px-4 w-8/12">
                    <img src="/featured-thumbnail.png" className="rounded-md w-full" />
                </div>
                <div className="w-4/12 px-4">
                    <div className="flex items-center text-white/70 space-x-4">
                        <div className="uppercase"> 
                            UI Design
                        </div>
                        <span>&bull;</span>
                        <div>
                            July 2, 2021
                        </div>
                    </div>
                    <h2 className="text-2xl mt-4">Understanding color theory: the color wheel and finding complementary colors</h2>
                    <p className="text-white/60 text-base mt-4 w-8/12">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </p>
                    <div className="flex items-center mt-5">
                        <img src="/author-1.png" className="w-14 h-14 rounded-full object-cover" />
                        <div className="ml-4">
                            <h3 className="text-white">Leslie Alexander</h3>
                            <div className="text-white/60">UI Designer</div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}