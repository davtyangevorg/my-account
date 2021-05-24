import React from 'react'

import { CustomPicker } from 'react-color';
import {Saturation} from "react-color/lib/components/common";

import * as Styled from './styles.js'

const ColorPicker = ({ hex, hsl, hsv, onChange }) => {
    return (
        <Styled.ColorPickerWrapper>
            <Styled.SaturationWrapper>
                <Saturation hsl={hsl} hsv={hsv} onChange={onChange} />
            </Styled.SaturationWrapper>
        </Styled.ColorPickerWrapper>
    )
}

export default CustomPicker(ColorPicker)
