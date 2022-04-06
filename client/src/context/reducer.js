import { Display_Alert, Clear_Alert } from './action'

const reducer = (state, action) => {
  // if(action)return

  throw new Error(`no such action type: ${action.type}`)
}

export default reducer
