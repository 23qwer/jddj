import { GETLOCATION } from './actions'

import {combineReducers} from 'redux'

function count(state = 0, action) {
    switch (action.type) {
        case GETLOCATION:
            return state + action.value
        default:
            return state
    }
}

// 最后导出combineReducers函数
export default combineReducers({count})