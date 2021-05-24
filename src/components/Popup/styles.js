import styled from 'styled-components'

export const PopupRootWrapper = styled.div`
    position: fixed;
    top:0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 576px) {
        flex-direction: column;
        justify-content: flex-end;
    }
`
export const PopupOverlay = styled.div`
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right: 0;
    background-color: rgba(54,63,90,.7);
    z-index: 1;
`