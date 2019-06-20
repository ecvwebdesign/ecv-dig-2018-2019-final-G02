import reducer from './reducers'

/**
 * This file should not contain any logic.
 * It's just meant to package everything from the duck folder so we can import pieces like that:
 * import { actions, operations } from './duck'
 * import { actions as anotherModuleActions } from '../anotherModule/duck'
 */

export { default as types } from './types'
export { default as actions } from './actions'
export { default as operations } from './operations'
export { default as selectors } from './selectors'

export default reducer
