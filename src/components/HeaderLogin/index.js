import { Container, LogoContent, ButtonPrimary, ButtonSecondary, Subscribe, ButtonSubscribe } from './styles';

function HeaderLogin({ visibleElements }) {
    return (
        <Container theme={visibleElements}>
            <nav>
                <div className="wrapper-left">
                    <LogoContent>
                        <img src="/images/logos/logo.svg" alt="Logo Disney+" />
                    </LogoContent>
                </div>
                <div className="wrapper-right">
                    <ButtonPrimary theme={visibleElements}>Assine agora</ButtonPrimary>
                    <ButtonSecondary theme={visibleElements}>Entrar</ButtonSecondary>
                </div>
            </nav>
            <Subscribe theme={visibleElements}>
                <ButtonSubscribe>Assine agora</ButtonSubscribe>
            </Subscribe>
        </Container>
    )
}

export default HeaderLogin;
