import { createSelector } from 'reselect'

/**
 * This file should contain the selectors that avoid altering the state when
 * ordering lists and such.
 *
 * @see https://alligator.io/redux/reselect/
 * @see https://medium.com/@parkerdan/react-reselect-and-redux-b34017f8194c
 */

/*
 * Selector to sort a list coming from the state without altering the state.
 */
const getStuff = (state) => state.list
const getStuffList = createSelector(
  getStuff,
  (stuff) => {
    // Sort list and return it.
    return stuff.sort((a, b) => a > b)
  }
)

export default {
  getStuffList,
}
