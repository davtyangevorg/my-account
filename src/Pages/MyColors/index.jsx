import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { createPalette } from '../../redux/actions/colors.js'
import { getPalettes } from '../../redux/selectors/colors.js'

import { areColorsNull } from '../../helpers.js'

import { MyColorsWrapper, Title, MyColorsInner, HeaderWrapper, AddPalette, AddIcon, MorePalettes, ShowMoreButton, PalettesWrapper, Text, ArrowUpSIcon, ShowMoreButtonInner } from './styles.js'

import Palette from './Palette/index.jsx'
// import CustomColorPicker from '../../components/CustomColorPicker/index.jsx'

const NUMBER_OF_DISPLAYED_PALETTES = 2

const MyColors = () => {

    const palettes = useSelector(getPalettes)
    const [isShowMorePalettes, setIsShowMorePalettes] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        if (!palettes.length) {
            dispatch(createPalette())
        }
    }, [palettes])

    const toggleShowMoreBtn = () => setIsShowMorePalettes(!isShowMorePalettes)
    return (
        <MyColorsWrapper>
            <HeaderWrapper>
                <Title>Palettes</Title>
                <AddPalette disabled={palettes[0] ? areColorsNull(palettes[0].colors) : false} onClick={() => dispatch(createPalette())}>
                    <AddIcon size={18} />
                    <a>Add</a>
                </AddPalette>
            </HeaderWrapper>
            <MyColorsInner>
                <PalettesWrapper paddingBottom={palettes.length===NUMBER_OF_DISPLAYED_PALETTES}>
                    {palettes.map((el, i) => {
                        if (i < NUMBER_OF_DISPLAYED_PALETTES) return <Palette paletteData={el} key={el._id} index={i} />
                    })}
                    <MorePalettes isShowMorePalettes={isShowMorePalettes}>
                        {palettes.map((el, i) => {
                            if (i >= NUMBER_OF_DISPLAYED_PALETTES) return <Palette paletteData={el} key={el._id} index={i} />
                        })}
                    </MorePalettes>
                </PalettesWrapper>
                {palettes.length > NUMBER_OF_DISPLAYED_PALETTES
                    && <ShowMoreButton>
                        <ShowMoreButtonInner onClick={toggleShowMoreBtn}>
                            <Text>{isShowMorePalettes ? 'Show Less' : 'Show More'}</Text>
                            <ArrowUpSIcon rotateArrow={isShowMorePalettes} size={25} />
                        </ShowMoreButtonInner>
                    </ShowMoreButton>}
            </MyColorsInner>
            {/* <CustomColorPicker /> */}
        </MyColorsWrapper>
    )
}
export default MyColors