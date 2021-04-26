import * as constants from './constants'

export const INITIAL_STATE = {
  caracters: {
    data: [],
    isFetching: false,
    error: null,
  },
  caracter: {
    data: [],
    isFetching: false,
    error: null,
  }
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.GET_ALL_CARACTERS:
      return {
        ...state,
        caracters: {
          ...state.caracters,
          isFetching: true
        }
      }
    case constants.GET_ALL_CARACTERS_SUCCESS:
      return {
        ...state,
        caracters: {
          ...state.caracters,
          data: action.payload,
          isFetching: false
        }
      }
    case constants.GET_ALL_CARACTERS_ERROR:
      return {
        ...state,
        caracters: {
          ...state.caracters,
          error: action.payload,
          isFetching: false
        }
      }
    case constants.GET_CARACTER_BY_ID:
      return {
        ...state,
        caracter: {
          ...state.caracter,
          isFetching: true
        }
      }
    case constants.GET_CARACTER_BY_ID_SUCCESS:
      return {
        ...state,
        caracter: {
          ...state.caracter,
          data: action.payload,
          isFetching: false
        }
      }
    case constants.GET_CARACTER_BY_ID_ERROR:
      return {
        ...state,
        caracter: {
          ...state.caracter,
          error: action.payload,
          isFetching: false
        }
      }
    default:
      return state
  }
}
