import styled from 'styled-components';
import { colors } from '../../styles/partials/_variables';
import { mediaQuery } from '../../styles/partials/_mixins';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
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
        padding: 40px 20px;
    `}
`;

export const Title = styled.h2`
    margin: 0 0 24px;
    text-align: center;
`;

export const Info = styled.p`
    margin: 0 0 24px;
    text-align: center;
    color: ${colors.gray.lightOpacity};
`;

export const ContentCards = styled.div`
    text-align: center;
`;

export const Card = styled.div`
    display: inline-block;
    box-sizing: border-box;
    vertical-align: top;
    width: 33.33%;
    padding: 12px;

    img {
        height: auto;
        max-width: 100%;
        cursor: pointer;
        border-radius: 4px;
        transition: all .4s ease;

        &:hover {
            transform: scale(1.05);
        }
    }

    ${mediaQuery.sm`
        width: 50%;
        padding: 9px;
    `}

    ${mediaQuery.xs`
        padding: 7px;
    `}
`;