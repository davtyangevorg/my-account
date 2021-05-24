import { SAVE_CHANGES, DELETE_PALETTE,CREATE_PALETTE } from '../types/colors.js'

export const saveChanges = data => {
    return {
        type: SAVE_CHANGES, data
    }
}
export const deletePalette = id => {
    return {
        type: DELETE_PALETTE, id
    }
}
export const createPalette = ()=>{
    return{
        type:CREATE_PALETTE
    }
}