import { Nav, Logo, NavMenu, UserImg } from './styles';
import { ListMenu } from '../../utils/lists';

function Header() {
    return (
        <Nav>
            <Logo src="/images/logos/logo.svg" />
            <NavMenu>
                {ListMenu.map((item, index) => (
                    <a key={index}>
                        <img src={item.icon} alt={item.label} />
                        <span>{item.label.toLocaleUpperCase()}</span>
                    </a>
                ))}
            </NavMenu>
            <UserImg src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Imagem de Perfil" />
        </Nav>
    )
}

export default Header;