import { createStore,combineReducers } from 'redux'

import colors from './reducers/colors.js'
import chart from './reducers/chart.js'

const redusers = combineReducers({
    colors,
    chart
})

export const store = createStore(redusers)