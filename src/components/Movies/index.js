import { Container, Content, Wrap } from './styles';

function Movies() {
    return (
        <Container>
            <h4>Recomendados para você</h4>
            <Content>
                <Wrap>
                    <img src="https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/12/carros.jpg" alt="Imagem representativa"></img>
                </Wrap>
                <Wrap>
                    <img src="https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/12/carros.jpg" alt="Imagem representativa"></img>
                </Wrap>
                <Wrap>
                    <img src="https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/12/carros.jpg" alt="Imagem representativa"></img>
                </Wrap>
                <Wrap>
                    <img src="https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/12/carros.jpg" alt="Imagem representativa"></img>
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies;
