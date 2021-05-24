import React from 'react'

import * as Styled from './styles.js'

const DeletePopupInner = ({ deleteP,setIsOpen,title }) => {
    return (
        <Styled.PopupInnerWrapper>
            <Styled.Title>Are you sure you want to delete <Styled.PaletteName>{title}</Styled.PaletteName>  from your palettes?</Styled.Title>
            <Styled.ButtonsWrapper>
                <Styled.Button onClick={()=>setIsOpen(false)} type='cancel'>Cancel</Styled.Button>
                <Styled.Button onClick={deleteP} type='delete'>DELETE</Styled.Button>
            </Styled.ButtonsWrapper>
            <Styled.CrossIcon size={25} onClick={()=>setIsOpen(false)}/>
        </Styled.PopupInnerWrapper>
    )
}

export default DeletePopupInner