import { Container, Content, Background, ImageTitle, Controls, PlayButton, TrailerButton, AddButton, GroupWacthButton, SubTitle, Description } from '../../styles/pages/detail';;

export default function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="Banner Filme" />
            </Background>
            <Content>
                <ImageTitle>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt="Logo Filme" />
                </ImageTitle>
                <Controls>
                    <PlayButton>
                        <img src="/images/icons/play-icon-black.png" alt="Play Icon" />
                        <span>Play</span>
                    </PlayButton>
                    <TrailerButton>
                        <img src="/images/icons/play-icon-white.png" alt="Play Icon" />
                        <span>Trailer</span>
                    </TrailerButton>
                    <AddButton>
                        <span>+</span>
                    </AddButton>
                    <GroupWacthButton>
                        <img src="/images/icons/group-icon.png" alt="Group Icon" />
                    </GroupWacthButton>
                </Controls>
                <SubTitle>
                    2018 - 7m - Family, Fantasy, Kids, Animation
                </SubTitle>
                <Description>
                    Uma mãe chinesa que fica triste quando seu filho adulto sai de casa tem outra chance de ser mãe quando um de seus bolinhos ganha vida. Mas ela acha que nada fica bonito e pequeno para sempre.
                </Description>
            </Content>
        </Container>
    )
}