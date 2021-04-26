import * as constants from './constants'

export const getAllCaracters = () => ({
  type: constants.GET_ALL_CARACTERS,
  payload: null
})


export const getAllCaractersSuccess = (caracters) => ({
  type: constants.GET_ALL_CARACTERS_SUCCESS,
  payload: caracters
})


export const getAllCaractersError = (error) => ({
  type: constants.GET_ALL_CARACTERS_ERROR,
  payload: error
})

export const getCaracterById = () => ({
  type: constants.GET_CARACTER_BY_ID,
  payload: null
})

export const getCaracterByIdSuccess = (caracter) => ({
  type: constants.GET_CARACTER_BY_ID_SUCCESS,
  payload: caracter
})

export const getCaracterByIdError = (error) => ({
  type: constants.GET_CARACTER_BY_ID_ERROR,
  payload: error
})
