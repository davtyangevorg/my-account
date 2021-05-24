import React, { useState, useRef } from 'react'

import { BlockPicker } from 'react-color'

import { useOnClickOutside } from '../../../../../hooks/useOnClickOutside.js'

import { AddColorWrapper, BlockPickerWrapper, EditColorWrapper, AddIcon, CrossIcon,ColorWrapper } from './styles.js'

import { useDrag, useDrop } from 'react-dnd'

const randomColor = '#387DFF'

const Color = ({ el, setColors, id, index, moveCard }) => {

    const [isShowColorPicker, setIsShowColorPicker] = useState(false)
    const addColor = () => {
        setColorsSuper(id, randomColor)
        setIsShowColorPicker(true)
    }

    const setColorsSuper = (id, value) => {
        setColors(prevState => prevState.map(el => el._id === id ? { ...el, color: value } : el))
    }

    const wrapperRef = useRef(null)
    useOnClickOutside(wrapperRef, setIsShowColorPicker)

    //--------------------------------------------drag & drop---------------------------------------------------------
    const ref = useRef(null)
    const [{ isDragging }, drag] = useDrag({
        type: 'color',
        item: () => {
            return { id, index }
        },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    })
    const [{ handlerId }, drop] = useDrop({
        accept: 'color',
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item) {
            if (!ref.current) return

            const dragIndex = item.index
            const hoverIndex = index
            if (dragIndex === hoverIndex) return

            moveCard(dragIndex, hoverIndex)
            item.index = hoverIndex
        }
    })
    drag(drop(ref))
    const [isDragStart, setIsDragStart] = useState(true)
    return (
        <>
            {
                el.color
                    ?
                    <ColorWrapper>
                        <EditColorWrapper
                            onMouseDown={(e) => e.target === e.currentTarget && setIsDragStart(false)}
                            onMouseUp={() => setIsDragStart(true)}
                            onDragEnd={() => setIsDragStart(true)}
                            isDragging={isDragging}
                            isDragStart={isDragStart}
                            ref={ref}
                            isShowBorder={isShowColorPicker}
                            color={el.color}
                        >
                            {isDragStart && <CrossIcon size='20' onClick={() => setColorsSuper(id, null)} />}
                        </EditColorWrapper>
                        {isShowColorPicker && <BlockPickerWrapper ref={wrapperRef}>
                                <BlockPicker color={el.color} onChangeComplete={color => setColorsSuper(id, color.hex)} />
                            </BlockPickerWrapper>
                        }
                    </ColorWrapper>
                    : <AddColorWrapper onClick={addColor}>
                        <AddIcon size='24' />
                    </AddColorWrapper>
            }
        </>
    )
}

export default Color