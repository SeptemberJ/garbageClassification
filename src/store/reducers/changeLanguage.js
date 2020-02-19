import { handleActions } from 'redux-actions'
import { CHANGELANGUAGE } from '../types/changeLanguage'

const defaultState = {
  curLanguage: {id: '000', name: 'Chinese'}
}

export default handleActions({
  [CHANGELANGUAGE] (state, action) {
    return {
      ...state,
      curLanguage: action.payload
    }
  }
}, defaultState)