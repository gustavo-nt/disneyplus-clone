import { Container, Description, ForegroundImage } from './styles';

function AnyDevices() {
    return (
        <Container id="any-devices"> 
            <Description>
                <h2>Assista do seu jeito</h2>
                <p>Aproveite a tela grande da TV ou assista no tablet, laptop, celular e outros aparelhos. Nossa seleção de títulos em 4K não para de crescer. Além disso, para a felicidade de todos, é possível assistir em até 4 telas ao mesmo tempo.</p>
            </Description>
            <ForegroundImage>
                <img src="images/devices/all-devices.png" alt="Todos os dispositivos" />
            </ForegroundImage>
        </Container>
    )
}

export default AnyDevices;
