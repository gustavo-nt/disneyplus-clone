import styled from 'styled-components';
import { colors } from '../../styles/partials/_variables';

export const Container = styled.div`
    margin-top: 30px;
    display: grid;
    grid-gap: 25px;
    padding: 30px 0 26px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
`

export const Wrap = styled.div`
    cursor: pointer;    
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        z-index: 2;
        width: 100%;
        height: auto;
        object-fit: cover;
        position: absolute;
        inset: 0 0 0 0;

        border-radius: 10px;
        border: 3px solid ${colors.gray.opacity1};
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }

    video {
        opacity: 0;
        width: 100%;
        height: auto;
        border-radius: 10px;
    }

    &:hover {
        transform: scale(1.05);

        img {
            border-color: ${colors.gray.opacity8};
            box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        }
        
        video {
            opacity: 0.9;
        }
    }
`