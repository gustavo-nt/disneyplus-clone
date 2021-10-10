import { useState, useEffect } from 'react';
import { Exclusives, Highlights } from '../../utils/lists';
import { Container, Title, Info, ContentCards, Card } from './styles';

function Originals({ content }) {
    const [list, setList] = useState([]);
    const { title, info, type } = content;

    useEffect(() => {
        switch (type) {
            case 'exclusives':
                setList(Exclusives);
            break;

            case 'highlights':
                setList(Highlights);
            break;
        }
    }, []);

    return (
        <Container>
            <Title>{title}</Title>
            <Info>{info}</Info>

            <ContentCards>
                {list.map((item, index) => (
                    <Card key={index}>
                        <img src={item.image} alt={item.name} />
                    </Card>
                ))}
            </ContentCards>
        </Container>
    )
}

export default Originals;
