import Container from "@components/Container";
import CardPost from "@components/CardPost";
import Layout from "@components/Layout";
import mockPosts from '../utils/posts.json';
import { useState } from 'react';
import SectionHeader from "@components/SectionHeader";


export default function posts() {

    const [posts, setPosts] = useState(mockPosts);

    return (
        <Layout>
            <Container>
                <SectionHeader>UI Design</SectionHeader>
                <div className="flex -mx-4 flex-wrap mt-6">
                    {posts.map(post => (
                        <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
                            <CardPost {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </Layout>
    );
}