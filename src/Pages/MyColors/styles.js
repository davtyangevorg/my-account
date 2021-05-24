import styled from 'styled-components'

import { Add } from '@styled-icons/fluentui-system-filled/Add'
import {ArrowUpS} from '@styled-icons/remix-line/ArrowUpS'
import { Calculate } from '@styled-icons/material'

export const AddIcon = styled(Add)`
    color: #5690FF;
    margin-right: 7px;
    @media (max-width: 576px) {
        text-align: center;
        margin-right:0
    }
`
export const ArrowUpSIcon = styled(ArrowUpS)`
    color:#387DFF;
    transform: ${props=>props.rotateArrow ? 'rotate(0)' : 'rotate(180deg)'};
    transition: all .2s;
`
export const MyColorsWrapper = styled.div`
    width: 420px;
    border-radius: 10px;
    background-color: white;
    margin: auto;
    box-shadow: 0px 3px 10px #0052E026;
    @media (max-width: 576px) {
        width: 100%;
        background-color: #F7FBFF;
        border-radius: 0;
        box-shadow:none
    }
`
export const MyColorsInner = styled.div`
    padding-top: 15px ;
`
export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;
    border-bottom: 1px solid #EEF5FF;
`
export const Title = styled.h4`
    color:#363F5A;
    text-align: left;
    font-weight: 600;
`
export const AddPalette = styled.button`
    justify-content: space-between;
    cursor:pointer;
    border:0;
    border-radius: 5px;
    outline:none;
    font-size: 14px;
    color:#387DFF;
    font-weight: 600;
    padding:8px 17px;
    margin-left: 10px;
    background-color:#EEF5Ff;
    transition: all .1s;
    &:disabled{
        display: none;
    };
    &:hover ${AddIcon} {
        color:white;    
    };
    &:hover{
        background:#5690FF;
        color:white;
    }
    @media (max-width: 576px) {
        a{
            display: none;
        }
        padding:10px
    }
`
export const MorePalettes=styled.div`
    display: ${props=>props.isShowMorePalettes ? 'block' : 'none'};
`
export const ShowMoreButton=styled.div`
    border-top:1px solid #CFE0FF;
    height: 100%;
    padding: 15px 0;
    position: relative;
`
export const Text=styled.span`
    color:#387DFF;
    font-size: 14px;
    font-weight: 600;
    margin-right: 5px;
`
export const PalettesWrapper=styled.div`
    padding: 0 20px;
    padding-bottom: ${props=>props.paddingBottom && '10px'};
`
export const ShowMoreButtonInner=styled.div`
    width: 115px;
    margin: auto;
    cursor:pointer
`