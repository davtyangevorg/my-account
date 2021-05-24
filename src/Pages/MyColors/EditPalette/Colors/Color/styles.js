import styled from 'styled-components'
import { Add } from '@styled-icons/fluentui-system-filled/Add'
import { Cross } from '@styled-icons/entypo/Cross'

export const AddIcon = styled(Add)`
    color: #9AA6C8;
    @media (max-width: 576px) {
        position: absolute;
        left: 50%;  
        top: 50%;
        transform: translate(-50%,-50%);
    }
`
export const AddColorWrapper = styled.div`
    cursor: pointer;
    margin-bottom: 20px;
    padding: 22px;
    border: 1px dashed #C1C9E0;
    border-radius: 6px;
    position: relative;
    transition: all .1s;
    margin-right: 15px;
    &:hover{
        border: 2px dashed #387DFF;
        padding: 21px;
    }
    &:hover ${AddIcon} {
        color:black;    
    }
    @media (max-width: 576px) {
        width:50px;
        height:50px;
        margin:0;
    }
    @media (max-width: 425px) {
        height: 60px;
        width: 60px;
    } 
`
export const CrossIcon = styled(Cross)`
    color: white;
    background-color: #7683A8;
    position: absolute;
    border-radius: 50%;
    cursor: pointer;
    padding: 2px;
    right: -8px;
    top: -8px;
    display: none;
`
export const EditColorWrapper = styled.div`
    position: relative;
    cursor:grab;
    box-shadow:${props => props.isShowBorder && `0px 0px 0px 2px ${props.color}`};
    border:${props => props.isShowBorder ? '2px solid white' : '1px solid #DEE3F0'};
    border-radius: 6px;
    width: 100%;
    height: 100%;
    opacity: ${props => props.isDragging ? '0' : '1'};
    background-color:${props => props.color};
    transition: all .1s;
    transform: translate(0, 0);
    &:hover{
        box-shadow: 0px 0px 0px 2px ${props =>props.isDragStart ?  props.color : 'none' };
        border:${props=>props.isDragStart ?  '2px solid white' : 'none'}
    }
    &:hover ${CrossIcon} {
        display:${props => !props.isShowBorder && 'block'} ;
    }
    z-index: 1;
`
export const ColorWrapper = styled.div`
    position: relative; 
    width: 70px;
    margin-bottom: 20px;
    margin-right: 15px;
    height: 70px;  
    @media (max-width: 576px) {
        width:50px;
        height:50px;
        margin: 0;
    }
    @media (max-width: 425px) {
        height: 60px;
        width: 60px;
    } 
`
export const BlockPickerWrapper = styled.div`
    position: absolute;
    left: -50px;
    top:85px;
    z-index: 2;
`