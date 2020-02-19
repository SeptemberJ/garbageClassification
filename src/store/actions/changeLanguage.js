import { CHANGELANGUAGE } from '../types/changeLanguage'
import { createAction } from 'redux-actions'

export const changeLanguage = createAction(CHANGELANGUAGE, (curLanguage) => {
  return new Promise(resolve => {
    resolve(curLanguage)
    // setTimeout(() => {
    //   resolve(curLanguage)
    // }, 1000)
  })
})