import styled from 'styled-components';
import { colors } from '../../styles/partials/_variables';
import { mediaQuery } from '../../styles/partials/_mixins';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 1440px;
    margin: 0 auto;
    padding: 80px;

    h2 {
        text-align: center;
        margin-bottom: 24px;
    }

    ${mediaQuery.md_lg`
        padding: 60px 40px;
    `}

    ${mediaQuery.sm_md`
        padding: 50px 35px;
    `}

    ${mediaQuery.xs_sm`
        padding: 45px 30px;
    `}

    ${mediaQuery.sm`
        padding: 40px 20px;
    `}
`;

export const ContentDevices = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);

    ${mediaQuery.sm`
        grid-template-columns: repeat(2,1fr);
    `}
`;

export const Device = styled.div`
    text-align: center;
    max-width: 100%;
    padding: 12px;

    display: flex;
    align-items: center;
    flex-direction: column;

    .image-wrapper {
        > img {
            height: auto;
            max-width: 100%;
        }
    }

    .items-device {
        color: ${colors.gray.lightOpacity};

        p {
            cursor: pointer;
            margin-bottom: 6px;
            transition: all .2s ease;

            &:hover {
                color: ${colors.white.light};
            }
        }
    }
`;

export const Heading = styled.span`
    margin: 24px 0;
    font-size: 22px;
    font-weight: bold;

    ${mediaQuery.xs_sm`
        font-size: 18px;
    `}

    ${mediaQuery.xs`
        font-size: 16px;
    `}
`;