import Slider from 'react-slick';
import styled from 'styled-components';
import { colors } from '../../styles/partials/_variables';

export const MainSlider = styled(Slider)`
    margin-top: 20px;

    li {
        button {
            &:before {
                font-size: 10px;
                color: ${colors.gray.dark};
            }
        }

        &.slick-active {
            button:before {
                color: white;
            }
        }
    }

    button {
        z-index: 1;
    }

    .slick-list {
        overflow: visible;
    }
`;

export const Wrap = styled.div`
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        transition-duration: 300ms;
        border: 4px solid transparent;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;

        &:hover {
            border: 4px solid ${colors.gray.opacity8};
        }
    }
`;