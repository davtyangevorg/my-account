import React, { useEffect } from 'react'
import ReactDom from 'react-dom'

import { ModalOverlay, ModalRootWrapper } from './styles.js'


const Modal = ({ children, isOpen, setIsOpen }) => {

    useEffect(() => {
        isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'
    }, [isOpen])

    return ReactDom.createPortal(
        <ModalRootWrapper>
            <ModalOverlay onClick={() => setIsOpen(false)}></ModalOverlay>
            {children}
        </ModalRootWrapper>,
        document.querySelector('.modal-root')
    )
}

export default Modal
