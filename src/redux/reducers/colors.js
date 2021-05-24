import { produce } from 'immer'

import { SAVE_CHANGES, DELETE_PALETTE, CREATE_PALETTE } from '../types/colors.js'

const COLORS_QUANTITY = 8

const initalState = {
    palettes: [
        {
            _id: 1,
            title: 'Palette 1 asdf asdfasdf asdasdfasd fsdf asdf asdfasdf asdfasdf',
            colors: [
                { _id: 1, color: '#766DE8' },
                { _id: 2, color: '#9C94FC' },
                { _id: 3, color: '#D8D5FC' },
                { _id: 4, color: '#21FEBB' },
                { _id: 5, color: '#6FF4CB' },
                { _id: 6, color: '#A3FCE0' },
                { _id: 7, color: '#D6FFF2' },
                { _id: 8, color: '#564FAF' },
            ]
        },
        {
            _id: 2,
            title: 'Palette 2',
            colors: [
                { _id: 1, color: '#766DE8' },
                { _id: 2, color: '#9C94FC' },
                { _id: 3, color: '#D8D5FC' },
                { _id: 4, color: '#21FEBB' },
                { _id: 5, color: '#6FF4CB' },
                { _id: 6, color: '#A3FCE0' },
                { _id: 7, color: '#D6FFF2' },
                { _id: 8, color: '#564FAF' },
            ]
        },
        {
            _id: 3,
            title: 'Palette 3',
            colors: [
                { _id: 1, color: '#766DE8' },
                { _id: 2, color: '#9C94FC' },
                { _id: 3, color: '#D8D5FC' },
                { _id: 4, color: '#21FEBB' },
                { _id: 5, color: '#6FF4CB' },
                { _id: 6, color: '#A3FCE0' },
                { _id: 7, color: '#D6FFF2' },
                { _id: 8, color: '#564FAF' },
            ]
        },
        {
            _id: 4,
            title: 'Palette 4',
            colors: [
                { _id: 1, color: '#766DE8' },
                { _id: 2, color: '#9C94FC' },
                { _id: 3, color: '#D8D5FC' },
                { _id: 4, color: '#21FEBB' },
                { _id: 5, color: '#6FF4CB' },
                { _id: 6, color: '#A3FCE0' },
                { _id: 7, color: '#D6FFF2' },
                { _id: 8, color: '#564FAF' },
            ]
        },
        {
            _id: 5,
            title: 'Palette 5',
            colors: [
                { _id: 1, color: '#766DE8' },
                { _id: 2, color: '#9C94FC' },
                { _id: 3, color: '#D8D5FC' },
                { _id: 4, color: '#21FEBB' },
                { _id: 5, color: '#6FF4CB' },
                { _id: 6, color: '#A3FCE0' },
                { _id: 7, color: '#D6FFF2' },
                { _id: 8, color: '#564FAF' },
            ]
        }
    ]
}

const colorsReducer = (state = initalState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case SAVE_CHANGES: {
               // console.log(draft.palettes.map(el=>el._id===action.data._id ? action.data : el))
               // return draft.palettes.map(el=>el._id===action.data._id ? action.data : el)
                return {
                    ...state,
                    palettes: state.palettes.map(el => el._id === action.data._id ? action.data : el)
                }
            }
            case DELETE_PALETTE: {
                return {
                    ...state,
                    palettes: state.palettes.filter(el => el._id !== action.id)
                }
            }
            case CREATE_PALETTE: {
                return {
                    ...state,
                    palettes: [
                        {
                            _id: generateRandomId(),
                            title: 'Palette 1',
                            colors: Array(COLORS_QUANTITY).fill().map(_ => {
                                return { _id: generateRandomId(), color: null }
                            })
                        },
                        ...state.palettes
                    ]
                }
            }
            default: return state
        }
    })

}

export default colorsReducer

const generateRandomId = () => Math.random().toString(36).substring(2) + '_' + Math.random().toString(36).substring(2)