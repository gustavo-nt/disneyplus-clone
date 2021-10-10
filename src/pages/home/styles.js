import styled from 'styled-components';

export const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    
    &:before {
        content: '';
        background: url("/images/background/home-background.png") center center / cover no-repeat fixed;
        position: absolute;
        inset: 0 0 0 0;
        z-index: -1;
    }
`;