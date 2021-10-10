import styled from 'styled-components';
import { colors } from '../../styles/partials/_variables';
import { mediaQuery } from '../../styles/partials/_mixins';

export const Container = styled.div`
    padding: 80px;
    max-width: 1440px;
    position: relative;
    margin: 0 auto;

    ${mediaQuery.md_lg`
        padding: 60px 40px;
    `}

    ${mediaQuery.sm_md`
        padding: 50px 35px;
    `}

    ${mediaQuery.sm`
        padding: 40px 20px;
    `}
`;

export const Content = styled.div`
    position: absolute;
    z-index: 3;
    left: 52%;
    top: 50%;
    width: 40%;
    transform: translateY(-50%);

    h2 {
        margin: 0 0 24px;
    }

    p {
        line-height: 1.5;
        color: ${colors.gray.lightOpacity};
    }

    ${mediaQuery.sm`
        padding: 0;
        width: 100%;
        position: static;
        text-align: center;
        transform: translate(0);
    `}
`;

export const Background = styled.div`
    width: 100%;

    img {
        height: auto;
        max-width: 100%;
    }

    ${mediaQuery.sm`

    `}
`;