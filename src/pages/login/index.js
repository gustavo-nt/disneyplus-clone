import Head from 'next/head';
import { useEffect, useState } from 'react';
import { colors } from '../../styles/partials/_variables';

import HeaderLogin from '../../components/HeaderLogin';
import HeroContent from '../../components/HeroContent';
import AnyDevices from '../../components/AnyDevices';
import AllDevices from '../../components/AllDevices';
import Originals from '../../components/Originals';
import Download from '../../components/Download';
import FooterLogin from '../../components/FooterLogin';

import { Container } from '../../styles/pages/login';
import { Materials } from '../../utils/lists';

export default function Login() {
    const [visibleElements, setVisibleElements] = useState({
        opacity: 0,
        backHeader: 'transparent',
        positionSubscribe: 'translate3d(0, 100%, 0)'
    });

    useEffect(() => {
        let scrollFooter = 150;
        let sizeWindow = window.innerWidth;
        let height = sizeWindow > 768 ? 750 : 200;

        const resizeListener = () => {
            sizeWindow = window.innerWidth;
            height = sizeWindow > 768 ? 750 : 200;
        }

        const scrollListener = () => {
            if (window.scrollY > height) {
                setVisibleElements({
                    opacity: 1,
                    backHeader: colors.gray.black,
                    positionSubscribe: 'translateZ(0)'
                });
            } else {
                setVisibleElements({
                    opacity: 0,
                    backHeader: 'transparent',
                    positionSubscribe: 'translate3d(0, 100%, 0)'
                });
            }

            if (document.documentElement.scrollHeight - document.documentElement.clientHeight - scrollFooter < window.scrollY) {
                setVisibleElements({
                    positionSubscribe: 'translate3d(0, 100%, 0)'
                });
            }
        }

        window.addEventListener('scroll', scrollListener);
        window.addEventListener('resize', resizeListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
            window.removeEventListener('resize', resizeListener);
        }
    }, []);

    return (
        <>
            <Head>
                <title>Disney+ | O melhor da Disney, Marvel, Pixar, Star Wars e National Geographic em um só lugar. | Disney+</title> 
            </Head>
            <HeaderLogin visibleElements={visibleElements} />

            <Container>
                <HeroContent />
                <AnyDevices />
                <Originals content={Materials.exclusives} />
                <Download />
                <Originals content={Materials.highlights} />
                <AllDevices />
            </Container>

            <FooterLogin />
        </>
    );
}
