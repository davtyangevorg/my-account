import React from 'react'
import ReactDom from 'react-dom'

import { PopupOverlay, PopupRootWrapper } from './styles.js'

const Popup = React.memo(({ children, setIsOpen }) => {

    return ReactDom.createPortal(
        <PopupRootWrapper>
            <PopupOverlay onClick={() => setIsOpen(false)}></PopupOverlay>
            {children}
        </PopupRootWrapper>,
        document.querySelector('.popup-root')
    )
})

export default Popup
