import styled from 'styled-components';
import { colors } from '../../styles/partials/_variables';

export const Container = styled.div`
    padding-bottom: 30px;
`

export const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`

export const Wrap = styled.div`
    cursor: pointer;    
    overflow: hidden;
    border-radius: 10px;
    border: 3px solid ${colors.gray.opacity1};
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        border-color: ${colors.gray.opacity8};
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    }
`