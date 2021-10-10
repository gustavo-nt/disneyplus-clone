import styled from 'styled-components';
import { colors } from '../../styles/partials/_variables';

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 26px 8px;
    max-width: 1440px;
    margin: 0 auto;
`;

export const Logo = styled.img`
    width: 80px;
    margin-bottom: 6px;
    cursor: pointer;
`;

export const Links = styled.div`
    font-size: 12px;
    margin-bottom: 6px;
    color: ${colors.gray.lightOpacity};

    span {
        cursor: pointer;
        padding: 8px 12px;
        text-decoration: none;
        display: inline-block;
        transition: all .2s ease;

        &:hover {
            color: ${colors.white.light};
        }
    }
`

export const Copyright = styled.div`
    font-size: 12px;
    margin-bottom: 24px;
    color: ${colors.gray.lightOpacity};
`;