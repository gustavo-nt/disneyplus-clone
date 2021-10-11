import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Viewers from '../components/Viewers';
import Movies from '../components/Movies';

import { Container } from '../styles/pages/home';

export default function App() {
    const [user, setUser] = useState(false)
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/login');
        }
    }, []);

    return (
        <>
            <Head>
                <title>Disney+ | O melhor da Disney, Marvel, Pixar, Star Wars e National Geographic em um só lugar. | Disney+</title> 
            </Head>
            <Header />

            <Container>
                <Carousel />
                <Viewers />
                <Movies />
            </Container>
        </>
    );
}

 