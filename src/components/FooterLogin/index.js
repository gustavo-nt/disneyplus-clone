import { Container, Logo, Links, Copyright } from './styles';

function FooterLogin() {
    return (
        <Container>
            <Logo src="/images/logos/logo.svg" alt="Logo Disney+" />
            <Links>
                <span>Contrato de Assinatura</span>
                <span>Política de privacidade</span>
                <span>Proteção de Dados no Brasil</span>
                <span>Anúncios personalizados</span>
                <span>Dispositivos compatíveis</span>
                <span>Ajuda</span>
                <span>Sobre o Disney+</span>
            </Links>
            <Copyright>
                <span>® 2021 Disney, Disney+ e The Walt Disney Company. Todos os direitos reservados. Serviço de assinatura paga. Conteúdo sujeito a disponibilidade.</span>
            </Copyright>
        </Container>
    )
}

export default FooterLogin;
