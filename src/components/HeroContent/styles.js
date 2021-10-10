import styled from 'styled-components';
import { colors } from '../../styles/partials/_variables';
import { mediaQuery } from '../../styles/partials/_mixins';

export const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;

    width: 100%;
    padding: 80px;
    min-height: 100vh;
    justify-content: center;

    h1 {
        margin-bottom: 30px;

        span {
            display: block;
        }
    }

    ${mediaQuery.md_lg`
        padding: 80px 40px;
    `}

    ${mediaQuery.sm_md`
        padding: 80px 35px;
    `}

    ${mediaQuery.xs_sm`
        padding: 80px 30px;
    `}

    ${mediaQuery.sm`
        min-height: 70vh;
        padding: 80px 20px;
        align-items: center;

        h1 {
            text-align: center;
            margin-bottom: 10px;

            span {
                display: inline;
            }
        }
    `}
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;

    ${mediaQuery.sm`
        margin-top: 22%;
        align-items: center;
    `}
`;

export const Logo = styled.img`
    max-width: 150px;
    margin-bottom: 20px;

    ${mediaQuery.sm`
        margin-bottom: 10px;
    `}
`;

export const ContentPlans = styled.div`
    display: flex;
    
    .plan {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-right: 16px;

        width: 50%;
        max-width: 360px;
        margin-bottom: 20px;
        vertical-align: top;

        h3 {
            margin-bottom: 8px;

            span {
                opacity: .7;
                display: inline;
                font-size: 14px;    
                font-weight: 400;
            }
        }

        + .plan {
            padding-right: 0;
            padding-left: 16px;
        }
    }

    ${mediaQuery.sm`
        width: 100%;
        margin-bottom: 20px;
        align-items: center;
        flex-direction: column;

        .plan {
            width: 100%;
            padding: 15px 0;
            max-width: 340px;
            padding-right: 0;
            margin-bottom: 0;
            align-items: center;
            
            h3 {
                text-align: center;
            }

            + .plan {
                padding-left: 0;
            }

            &:first-child {
                padding-top: 0;
                border-bottom: 2px solid ${colors.gray.strongExtraOpacity};
            }
        }
    `}
`;

export const ButtonPrimary = styled.button`
    outline: none;
    cursor: pointer;
    letter-spacing: .8px;
    text-transform: uppercase;

    width: 100%;
    min-width: auto;
    max-width: 330px;

    font-size: 18px;
    font-weight: 400;
    border-radius: 4px;
    text-align: center;
    padding: 16.5px 14px;

    color: ${colors.white.light};
    border: 1px solid transparent;
    background-color: ${colors.blue.light};
    opacity: ${props => props.theme.opacity};
    transition: all .2s ease 0s;

    &:hover {
        text-decoration: none;
        background-color: ${colors.blue.strong};
    }

    ${mediaQuery.xs`
        font-size: 15px;
        padding: 11.5px 12px;
    `}
`;

export const NotePrices = styled.p`
    font-size: 12px;
    margin-bottom: 20px;
    color: ${colors.gray.strongOpacity};

    ${mediaQuery.md_lg`
        font-size: 11px;
    `}

    ${mediaQuery.md`
        font-size: 10px;
    `}

    ${mediaQuery.sm`
        text-align: center;
    `}
`;

export const FranchiseLogos = styled.div`
    position: absolute;
    bottom: 0;
    height: 60px;
    
    img {
        max-width: 600px;
    }

    ${mediaQuery.md_lg`
        img {
            max-width: 500px;
        }
    `}

    ${mediaQuery.sm`
        display: none;
    `}
`;

export const Hint = styled.div`
    position: absolute;
    bottom: 23px;
    right: 35px;
    left: 35px;
    z-index: 1;

    text-align: right;
    animation: bounce 1.75s infinite;

    img {
        width: 32px;
        height: auto;
        cursor: pointer;
    }

    ${mediaQuery.sm`
        text-align: center;
    `}
`

export const Background = styled.div`
    position: absolute;
    inset: 0 0 0 0;

    height: 100%;
    overflow: hidden;
    pointer-events: none;

    background: url("/images/background/login-background.jpg");
    background-size: 100%;
    background-position: top;
    background-repeat: no-repeat;

    ${mediaQuery.sm`
        background: url("/images/background/login-background-mobile.jpg");
        background-size: 100%;
        background-position: top;
        background-repeat: no-repeat;
    `}
`;