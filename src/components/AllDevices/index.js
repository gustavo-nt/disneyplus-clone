import { Container, ContentDevices, Device, Heading } from './styles';
import { Devices } from '../../utils/lists';

function AllDevices() {
    return (
        <Container>
            <h2>Disponível nos seus dispositivos favoritos</h2>
            <ContentDevices>
                {Devices.map((item, index) => (
                    <Device key={index}>
                        <div className="image-wrapper">
                            <img src={item.icon} alt={item.title} />
                        </div>
                        <Heading>{item.title}</Heading>
                        <div className="items-device">
                            {item.examples.map(value => (
                                <p key={value}>{value}</p>
                            ))}
                        </div>
                    </Device>
                ))}
            </ContentDevices>
        </Container>
    )
}

export default AllDevices;
