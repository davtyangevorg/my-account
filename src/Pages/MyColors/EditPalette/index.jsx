import React, { memo, useState } from 'react'

import { AddPalettesWrapper, Button, ButtonWrapper } from './styles.js'

import { saveChanges,deletePalette } from '../../../redux/actions/colors.js'
import { useDispatch } from 'react-redux'

import {areColorsNull} from '../../../helpers.js'

import Colors from './Colors/index.jsx'
import EditableTitle from './EditableTitle/index.jsx'

const EditPalette = memo(({ data, setIsPaletteModeEdit }) => {

    const [title, setTitle] = useState(data.title)
    const [colors, setColors] = useState(data.colors)

    const dispatch = useDispatch()
    
    const discard = () => {
        setTitle(data.title)
        setColors(data.colors)
        if(areColorsNull(data.colors)){
            dispatch(deletePalette(data._id))
        }
        setIsPaletteModeEdit(false)
    }
    const save = () => {
        dispatch(saveChanges({ ...data, title, colors }))
        setIsPaletteModeEdit(false)
    }

    return (
        <AddPalettesWrapper>
            <EditableTitle title={title} setTitle={setTitle} />
            <Colors colors={colors} setColors={setColors} />
            <ButtonWrapper>
                <Button type='discard' onClick={discard} disabled={areColorsNull(colors)}>Discard</Button>
                <Button type='save' onClick={save} disabled={areColorsNull(colors)}>Save</Button>
            </ButtonWrapper>
        </AddPalettesWrapper>
    )
})
export default EditPalette