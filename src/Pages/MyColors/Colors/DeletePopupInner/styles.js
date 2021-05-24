import styled from "styled-components";
import { Cross } from '@styled-icons/entypo/Cross'

export const PopupInnerWrapper = styled.div`
    background-color: white;
    width: 480px;
    padding: 50px 70px;
    border-radius: 4px;
    box-shadow: 0px 3px 10px #0052E026;
    z-index:10;
    position: relative;
    @media (max-width: 576px) {
        width: 100%;
        border-radius: 10px 10px 0 0;
    }
`
export const Title = styled.h4`
    text-align: center;
    font-size: 18px;
    color:#363F5A;
    font-weight: 500;
    margin-bottom: 30px;
`
export const ButtonsWrapper = styled.div`
    text-align: center;
    font-size: 14px;
    font-weight: 500;
`
export const Button = styled.button`
    font-size: 14px;
    font-weight: ${props => props.type === 'cancel' ? '600' : '500'};
    border:0;
    outline: none;
    cursor: pointer;
    border-radius: 10px;
    padding: 12px 30px;
    margin-right: 10px;
    color:${props => props.type === 'cancel' ? '#545F7E' : 'white'};
    background:${props => props.type === 'cancel' ? 'white' : 'transparent linear-gradient(180deg, #FF706B 0%, #FF4141 100%) 0% 0% no-repeat padding-box'}; 
    transition:all .1s;
    &:hover{
        background-color:${props => props.type === 'cancel' && '#EEF5FF'};
        box-shadow:${props => props.type === 'delete' && '0px 3px 9px #FF4C4C80'};
    }
`
export const CrossIcon = styled(Cross)`
    color: #7683A8;
    position: absolute;
    cursor:pointer;
    top:10px;
    right: 10px;
`
export const PaletteName=styled.div`
    color:black;
    font-weight: 600;
`