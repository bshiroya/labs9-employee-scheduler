import {
  OPEN_AND_CLOSE_HOURS_UPDATED,
  HOURS_UPDATE_FAILED,
  HOURS_FETCHED,
  HOURS_FETCHING_FAILED,
  HOURS_UPDATED,
  HOURS_LOADING,
  LOGOUT
} from '../actions'

const initialState = {
  loading: false,
  hours: [],
  error: ''
}

export const hoursReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOURS_LOADING:
      return {
        ...state,
        loading: true
      }
    case HOURS_FETCHED:
      return {
        ...state,
        hours: [...action.payload],
        loading: false,
        error: ''
      }
    case HOURS_UPDATED: // set day to closed
      const { hourId, changes } = action.payload
      return {
        hours: state.hours.map(item => {
          // if this is not the item I want to update, leave it alone
          if (item.id !== hourId) {
            return item
          }
          // else return the an updated value
          return {
            ...item,
            closed: changes
          }
        }),
        loading: false,
        error: ''
      }
    case OPEN_AND_CLOSE_HOURS_UPDATED:
      const { start, end } = action.payload
      return {
        hours: state.hours.map(item => {
          // if this is not the item I want to update, leave it alone
          if (item.id !== hourId) {
            return item
          }
          // else return the an updated value
          return {
            ...item,
            open_time: start,
            close_time: end
          }
        }),
        loading: false,
        error: ''
      }
    case HOURS_UPDATE_FAILED:
      return {
        ...state,
        loading: false,
        error: 'update failed'
      }
    case HOURS_FETCHING_FAILED:
      return {
        ...state,
        loading: false,
        error: 'fetching failed'
      }
    case LOGOUT:
      return initialState
    default:
      return state
  }
}
