import styled from 'styled-components'

import { MoreVerticalOutline } from '@styled-icons/evaicons-outline/MoreVerticalOutline'
import { Edit } from '@styled-icons/material/Edit'
import { Delete } from '@styled-icons/material/Delete'
import { Cross } from '@styled-icons/entypo/Cross'

export const EditIcon = styled(Edit)`
    margin-right: 10px;
    color:${props => props.isMobile ? '#545F7E' : 'black'};
`
export const DeleteIcon = styled(Delete)`
    margin-right: 10px;
    color:${props => props.isMobile ? '#545F7E' : 'black'};
`
export const MoreIcon = styled(MoreVerticalOutline)`
    cursor: pointer;
    border-radius: 5px;
    padding: 5px;
    transition: all .1s;
    color: #575e70;
    &:hover{
        background-color: #EEF5FF;
        color: black;
    }
`
export const ColorsWrapper = styled.div`
    border:1px solid #EEF5FF;
    width: 100%;
    border-radius: 5px;
    padding: 10px 18px;
    @media (max-width: 576px) {
        background-color: white;
    }
`
export const HeaderWrapper = styled.div`
    margin-bottom: 10px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const TitleWrapper = styled.div`
    position: relative;
`
export const Title = styled.h5`
    max-width: 300px;
    text-align: left;
    color:black;
    font-size: 14px;
    font-weight: 500;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    &::before{
        content:attr(data-text);
        position: absolute;
        bottom:130%;
        left: -20px;
        font-size: 14px;
        font-weight: 500;
        padding: 10px 15px;
        border-radius:5px;
        max-width: 300px;
        min-width: 70px;
        white-space: pre-wrap;
        text-align: center;
        background-color:#545F7E;
        color:white;
        box-shadow: 0px 3px 6px #252E484D;
        display: none;
    }
    &:hover::before{
        display: block;
    }
    &::after{       
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top:-5px;
        border:5px solid;
        border-color: #545F7E transparent transparent transparent;
        display: none;
    } 
    &:hover::after{
        display: block;
    }
    @media (max-width: 576px) {
        max-width: 200px;
    }
    @media (max-width: 375px) {
        max-width: 100px;
    }
`
export const ColorsList = styled.div`
    display: flex;
    @media (max-width: 425px) {
        flex-wrap: wrap;
        gap:15px 15px;
        justify-content: space-around;
    }
`
export const Item = styled.div`
    background-color: ${props => props.color};
    width: 35px;
    height: 35px;
    margin-right: 10px;
    border-radius: 5px;
    border: 1px solid #DEE3F0;
    @media (max-width: 576px) {
        height: 50px;
        width: 50px;
    }
    @media (max-width: 425px) {
        height: 60px;
        width: 60px;
        margin: 0;
    }
`
export const MoreWrapper = styled.div`
    position: absolute;
    box-shadow: 0px 6px 12px #0052E01A;
    right: 0;
    z-index: 1;
    top:35px;
    width: 120px;
    background-color: white;
    @media (max-width: 576px) {
        display: none;
    }

`
export const MoreWrapperMobile = styled.div`
    z-index: 2;
    background-color: white;
    border-radius: 10px 10px 0 0 ;
`

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    padding:${props => props.isMobile ? '15px 20px' : '10px'};
    transition: all .1s;
    border-bottom:${props => props.isMobile && '1px solid #CFE0FF'};
    border-radius: ${props => props.isCross && '10px 10px 0 0'};
    &:hover{
        background-color: #EEF5FF;
    }
`
export const Text = styled.h5`  
    color:${props => props.isMobile ? `${props.color || '#545F7E'}` : '#363F5A'};
    font-size: ${props => props.isMobile ? '14px' : '12px'};
    cursor: default;
    font-weight:${props => props.isMobile ? '500' : '600'};
`
export const CrossIcon = styled(Cross)`
    color: #7683A8;
    margin-right: 10px;
`