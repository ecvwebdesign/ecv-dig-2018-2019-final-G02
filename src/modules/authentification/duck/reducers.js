import types from './types'

/**
 * Reducer that resolve actions.
 *
 * You can have multiple sub-reducers like in this example, or just one (in that case you can
 * directly export the only one you have).
 */

const exampleReducerInitialState = {}

const exampleReducer = (state = exampleReducerInitialState, action) => {
  switch (action.type) {
    case types.EXAMPLE_ACTION:
      return {
        ...state,
        // Put changes to state here.
      }

    default:
      return state
  }
}

const reducer = (state = {}, action) => ({
  example: exampleReducer(state.example, action),
})

export default reducer
