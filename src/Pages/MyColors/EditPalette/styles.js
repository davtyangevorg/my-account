import styled from 'styled-components'

export const AddPalettesWrapper = styled.div`
    border:1px solid #EEF5FF;
    width: 100%;
    margin: auto;
    border-radius: 5px;
    padding: 10px 18px;
    @media (max-width: 576px) {
        background-color: white;
    }
    @media (max-width: 375px) {
    }
`
export const ButtonWrapper = styled.div`
    text-align: right;
    @media (max-width: 576px) {
        text-align: center;
    }
`
export const Button = styled.button`
    cursor:pointer;
    border:0;
    border-radius: 5px;
    outline:none;
    font-size: 14px;
    color:#387DFF;
    font-weight: 600;
    padding:12px 20px;
    margin-left: 10px;
    background-color: ${props => props.type === 'discard' ? '#fff' : '#EEF5Ff'};
    transition: all .1s;
    &:disabled{
        color:#9CBEFF;
        cursor:no-drop;
    };
    &:hover:disabled{
        color:#9CBEFF;
        background:${props => props.type === 'discard' ? 'white' : '#EEF5Ff'};
    }
    &:hover{
        background:${props => props.type === 'discard' ? '#EEF5Ff' : '#5690FF'};
        color:${props => props.type === 'save' ? 'white' : '#387DFF'};
    }
    @media (max-width: 375px) {
        font-size: 12px;
        padding: 10px;
    }
`