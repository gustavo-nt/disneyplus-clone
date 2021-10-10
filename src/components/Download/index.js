import { Container, Content, Background } from './styles';

function Download() {
    return (
        <Container>
            <Content>
                <h2>Baixe filmes e séries</h2>
                <p>Baixe e assista quando e onde quiser. Assim, seus favoritos estão sempre com você, até mesmo sem internet.</p>
            </Content>

            <Background>
                <picture>
                    <source media="(max-width: 768px)" srcSet="/images/download/lion-king-mobile.png" />
                    <source media="(min-width: 769px)" srcSet="/images/download/lion-king-desktop.png" />
                    <img src="/images/download/lion-king-desktop.png" alt="Baixe filmes e séries" />
                </picture>
            </Background>
        </Container>
    )
}

export default Download;
