import styled from 'styled-components';
import { colors } from '../../styles/partials/_variables';
import { mediaQuery } from '../../styles/partials/_mixins';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;
    padding: 80px;

    ${mediaQuery.md_lg`
        padding: 60px 40px;
    `}

    ${mediaQuery.sm_md`
        padding: 50px 35px;
    `}

    ${mediaQuery.sm`
        padding: 20px 30px 40px 30px;
        flex-direction: column-reverse;
    `}
`;

export const Description = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    padding: 0 4% 0 0;
    margin-top: 20px;
    width: 50%;

    h2 {
        margin: 0 0 24px;
    }

    p {
        color: ${colors.gray.lightOpacity};
    }

    ${mediaQuery.sm`
        padding: 0;
        width: 100%;
        margin-top: 25px;
        text-align: center;
    `}
`;

export const ForegroundImage = styled.div`
    width: 50%;

    img {
        height: auto;
        max-width: 100%;
    }

    ${mediaQuery.sm`
        width: 100%;
    `}
`;