import { combineReducers } from 'redux'
import counter from './counter'
import changeLanguage from './changeLanguage'

export default combineReducers({
  counter,
  changeLanguage
})