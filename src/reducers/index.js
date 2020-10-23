import { combineReducers } from 'redux'
import { users } from './userReducers'

const reducers = combineReducers({ users })

export default reducers