import styled from 'styled-components';
import { colors } from '../../styles/partials/_variables';
import { mediaQuery } from '../../styles/partials/_mixins';

export const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    height: 70px;
    padding: 0 36px;
    letter-spacing: 1.5px;
    transition: all .5s ease 0s;
    background-color: ${props => props.theme.backHeader};

    nav {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .wrapper-left {
            transition: all .2s ease 0s;
            opacity: ${props => props.theme.opacity};
        }

        .wrapper-right {
            display: flex;
            align-items: center;
            gap: 20px;
        }
    }

    ${mediaQuery.sm`
        padding: 0 12px 0 20px;
        letter-spacing: 8px;
    `}

    ${mediaQuery.sm`
        height: 60px;
    `}
`;

export const LogoContent = styled.div`
    width: 80px;
    margin-top: 4px;
    max-height: 70px;

    img {
        max-width: 100%;
    }
`;

export const ButtonPrimary = styled.button`
    outline: none;
    cursor: pointer;
    text-transform: uppercase;

    font-size: 15px;
    font-weight: 400;
    border-radius: 4px;
    padding: 10px 16px;

    color: ${colors.white.light};
    border: 1px solid transparent;
    background-color: ${colors.blue.light};
    opacity: ${props => props.theme.opacity};
    transition: all .2s ease 0s;

    &:hover {
        text-decoration: none;
        background-color: ${colors.blue.strong};
    }

    ${mediaQuery.sm`
        display: none;
    `}
`;

export const ButtonSecondary = styled.button`
    outline: none;
    cursor: pointer;
    text-transform: uppercase;

    font-size: 15px;
    font-weight: 400;
    border-radius: 4px;
    padding: 10px 16px;

    transition: all .3s ease 0s;
    color: ${colors.white.light};
    border: 1px solid ${colors.white.light};
    background-color: ${colors.black.opacity6};

    &:hover {
        text-decoration: none;
        color: ${colors.black.original};
        background-color: ${colors.white.light};
    }

    ${mediaQuery.sm`
        background: transparent;
        border: 1px solid transparent;
    `}
`;

export const Subscribe = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 4;
    height: 88px;
    padding: 0 20px;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;

    opacity: 0;
    text-align: center;
    transition: all .5s ease 0s;
    background-color: ${colors.black.opacity8};
    transform: ${props => props.theme.positionSubscribe};

    ${mediaQuery.sm`
        opacity: 1;
    `}
`;

export const ButtonSubscribe = styled(ButtonPrimary)`
    display: block;
`;