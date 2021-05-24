import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }
`
export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`
export const Title = styled.h2`
    text-align: center;
    color: #363F5A;
    font-weight: 600;
    padding: 20px;
`