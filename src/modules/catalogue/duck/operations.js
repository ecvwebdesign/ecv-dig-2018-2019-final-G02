import actions from './actions'

/**
 * Operations are actions that are not pure (have side-effects) or are dispatching other actions.
 * Usually the actions here have no associated reducer.
 *
 * This file is usually where you will put the redux-thunk or redux-saga related code.
 */

const exampleOperation = () => (dispatch) => {
  // Fetch data or dispatch other actions.
  dispatch(actions.exampleAction())
}

export default {
  exampleOperation,
}
