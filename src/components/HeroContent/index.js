import { Container, Content, Logo, ContentPlans, ButtonPrimary, NotePrices, FranchiseLogos, Hint, Background } from './styles';
import { Link } from "react-scroll";

function HeroContent() {
    return (
        <Container>
            <Content>
                <Logo src="/images/logos/logo.svg" alt="Logo Disney+" />
                <h1>As melhores histórias, <span>em um só lugar.</span></h1>

                <ContentPlans>
                    <div className="plan">
                        <h3>R$ 27,90<span>/mês*</span></h3>
                        <ButtonPrimary>Teste grátis</ButtonPrimary>
                    </div>
                    <div className="plan">
                        <h3>
                            De R$ 334 por
                            <div>
                                R$ 279,90
                                <span>/ano*</span>
                            </div>
                        </h3>
                        <ButtonPrimary>Teste grátis</ButtonPrimary>
                    </div>
                </ContentPlans>
                <NotePrices>*Preço Mensal: R$ 27,90. Preço Anual: R$ 279,90 à vista. Impostos e taxas podem ser aplicados.</NotePrices>

                <FranchiseLogos>
                    <img src="/images/logos/franchise-logos.png" alt="Companhias Disney+" />
                </FranchiseLogos>

                <Link
                    to="any-devices"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                >
                    <Hint>
                        <img src="/images/icons/arrow-down.svg" alt="Icone Flecha" />
                    </Hint> 
                </Link>
            </Content>
            
            <Background />
        </Container>
    )
}

export default HeroContent;
