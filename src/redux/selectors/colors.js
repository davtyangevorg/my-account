import { createSelector } from "reselect"

export const getPalettes = state => state.colors.palettes

// export const getFilledColors=createSelector(
//     getData,
//     data=>data.colors.filter(el=>el.color)
// )