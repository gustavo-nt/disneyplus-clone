import styled from 'styled-components';
import { colors } from '../../partials/_variables';

export const Container = styled.div`
    position: relative;
`;

export const Content = styled.div`
    position: relative;
    padding: 0 calc(3.5vw + 5px);
    min-height: calc(100vh - 70px);
`;

export const Background = styled.div`
    position: fixed;
    inset: 0 0 0 0;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const ImageTitle = styled.div`
    width: 35vw;
    height: 30vh;
    margin-top: 60px;
    min-width: 200px;
    min-height: 170px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

export const Controls = styled.div`
    display: flex;
    align-items: center;
`

export const PlayButton = styled.button`
    border: none;
    height: 56px;
    display: flex;
    padding: 0px 24px;
    margin-right: 22px;
    background: ${colors.gray.opacity8};
    letter-spacing: 1.8px;
    align-items: center;
    border-radius: 4px;
    font-size: 15px;
    cursor: pointer;

    &:hover {
        background: ${colors.gray.light};
    }

`

export const TrailerButton = styled(PlayButton)`
    color: ${colors.gray.opacity8};
    text-transform: uppercase;
    background: ${colors.black.opacity3};
    border: 1px solid ${colors.gray.opacity8};
    
`

export const AddButton = styled.button`
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.black.opacity6};
    border: 2px solid white;
    margin-right: 16px;
    border-radius: 50%;
    cursor: pointer;
    
    span {
        font-size: 30px;
        color: ${colors.white.light};
    }
`

export const GroupWacthButton = styled(AddButton)`
    background-color: ${colors.black.original};
`

export const SubTitle = styled.div`
    font-size: 15px;
    margin-top: 26px;
    min-height: 20px;
    color: ${colors.gray.opacity8};
`

export const Description = styled.div`
    font-size: 20px;
    margin-top: 16px;
    line-height: 1.4;
    max-width: 760px;
    color: ${colors.gray.opacity8};
`