import React, { useState } from 'react'

import {PaletteWrapper} from './styles.js'

import {areColorsNull} from '../../../helpers.js'

import EditPalette from '../EditPalette/index.jsx'
import Colors from '../Colors/index.jsx'

const Palette = ({paletteData,index}) => {

    const [isPaletteModeEdit,setIsPaletteModeEdit]=useState(areColorsNull(paletteData.colors))
   
    return (
        <PaletteWrapper>
            {isPaletteModeEdit
                ? <EditPalette data={paletteData} setIsPaletteModeEdit={setIsPaletteModeEdit}/>
                : <Colors index={index} data={paletteData} setIsPaletteModeEdit={setIsPaletteModeEdit}/>}
        </PaletteWrapper>
    )
}

export default Palette