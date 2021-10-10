import styled from 'styled-components';
import { colors } from '../../styles/partials/_variables';

export const Nav = styled.nav`
    height: 70px;
    display: flex;
    align-items: center;
    background: ${colors.gray.black};
    padding: 0 36px;
`;

export const Logo = styled.img`
    width: 80px;
`;

export const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        gap: 4px;

        padding: 0 12px;
        cursor: pointer;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            position: relative;
            letter-spacing: 1.42px;

            &:after {
                content: '';
                height: 2px;
                background: white;

                position: absolute;
                bottom: -6px;
                right: 0;
                left: 0;

                opacity: 0;
                transform: scaleX(0);
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
        }

        &:hover {
            span:after {
                opacity: 1;
                transform: scaleX(1);
            }
        }
    }
`;

export const UserImg = styled.img`
    width: 48px;
    height: 48px;
    cursor: pointer;
    border-radius: 50%;
`;