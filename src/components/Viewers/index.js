import { Container, Wrap } from './styles';
import { ListViewers } from '../../utils/lists';

function Viewers() {
    return (
        <Container>
            {ListViewers.map((item, index) => (
                <Wrap key={index}>
                    <img src={item.image} alt={item.name} />
                    <video autoPlay="autoplay" muted loop>
                        <source src={item.video} type={item.videoType} />
                    </video>
                </Wrap>
            ))}
        </Container>
    )
}

export default Viewers;
