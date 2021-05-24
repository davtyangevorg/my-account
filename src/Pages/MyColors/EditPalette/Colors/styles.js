import styled from 'styled-components'

export const ColorsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 576px) {
        flex-wrap: nowrap;
        gap:10px;
        margin-bottom: 20px;
    }
    @media (max-width: 425px) {
        flex-wrap: wrap;
        justify-content: space-around;
    }
`