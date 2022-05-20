import { useState } from 'react';
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "@components/Navbar";
import FeaturedPost from "@components/FeaturedPost";
import CardPost from "@components/CardPost";
import Footer from '@components/Footer';
import Container from '@components/Container';

export default function Home() {

  const [posts, setPosts] = useState([
    {
      id: 1,
      thumbnail: 'thumbnail-2.png',
      category: 'internet',
      date: 'June 28, 2021',
      title: 'How to design a product that can grow itself 10x in year',
      sortDescription: 'Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.',
      authorAvatar: '/author-2.png',
      authorName: 'Jenny Wilson',
      authorJob: 'Product Designer'
    },
    {
      id: 2,
      thumbnail: 'thumbnail-3.png',
      category: '9 TO 5',
      date: 'June 22, 2021',
      title: 'The More Important the Work, the More Important the Rest',
      sortDescription: 'Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.',
      authorAvatar: '/author-3.png',
      authorName: 'Esther Howard',
      authorJob: 'Entrepreneur'
    },
    {
      id: 3,
      thumbnail: 'thumbnail-4.png',
      category: 'INSPIRATIONS',
      date: 'June 18, 2021',
      title: 'Email Love - Email Inspiration, Templates and Discovery',
      sortDescription: 'Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else.',
      authorAvatar: '/author-4.png',
      authorName: 'Robert Fox',
      authorJob: 'Front-end Engineer'
    },
    {
      id: 4,
      thumbnail: 'thumbnail-5.png',
      category: 'internet',
      date: 'June 28, 2021',
      title: 'How to design a product that can grow itself 10x in year',
      sortDescription: 'Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.',
      authorAvatar: '/author-2.png',
      authorName: 'Jenny Wilson',
      authorJob: 'Product Designer'
    },
    {
      id: 5,
      thumbnail: 'thumbnail-6.png',
      category: '9 TO 5',
      date: 'June 22, 2021',
      title: 'The More Important the Work, the More Important the Rest',
      sortDescription: 'Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.',
      authorAvatar: '/author-3.png',
      authorName: 'Esther Howard',
      authorJob: 'Entrepreneur'
    },
    {
      id: 6,
      thumbnail: 'thumbnail-7.png',
      category: 'INSPIRATIONS',
      date: 'June 18, 2021',
      title: 'Email Love - Email Inspiration, Templates and Discovery',
      sortDescription: 'Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else.',
      authorAvatar: '/author-4.png',
      authorName: 'Robert Fox',
      authorJob: 'Front-end Engineer'
    }
  ]);

  return (
    <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white">
      <Navbar />
      <Container>
        <FeaturedPost />
        <div className="flex -mx-4 flex-wrap mt-6">
          {posts.map(post => (
            <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
              <CardPost {...post} />
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
}
