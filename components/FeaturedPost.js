import InfoPost from "./InfoPost";

export default function FeaturedPost() {
    return(
        <article>
            <div className="flex -mx-4 items-center justify-center">
                <div className="px-4 w-8/12">
                    <img src="/featured-thumbnail.png" className="rounded-md w-full" />
                </div>
                <div className="w-4/12 px-4">
                   <InfoPost 
                        category="UI DESIGN"
                        date="July 2, 2021"
                        title="Understanding color theory: the color wheel and finding complementary colors"
                        sortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
                        authorAvatar="/author-1.png"
                        authorName="Leslie Alexander"
                        authorJob="UI Designer"
                   /> 
                </div>
            </div>
        </article>
    );
}