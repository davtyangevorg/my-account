import React, { memo,useCallback } from 'react'

import { ColorsWrapper } from './styles.js'

import Color from './Color/index.jsx'

import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

const Colors = memo(({ colors, setColors }) => {

    const moveCard = useCallback((dragIndex, hoverIndex) => {
        const newColors=colors.map((el,i)=>{
            if(i===hoverIndex) return colors[dragIndex]
            if(i===dragIndex) return colors[hoverIndex]
            return el
        })
        setColors(newColors)
    }, [colors]);
    return (
        <DndProvider backend={HTML5Backend}>
            <ColorsWrapper >
                {colors.map((color, index) => {
                    return <Color key={color._id} el={color} setColors={setColors} id={color._id} index={index} moveCard={moveCard} />
                })}
            </ColorsWrapper>
        </DndProvider>
    )
})

export default Colors