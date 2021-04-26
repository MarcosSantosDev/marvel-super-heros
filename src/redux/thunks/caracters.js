import * as charactersService from '../../services/characters'
import * as actionCreator from '../caracters/actions'

export const getCharacters = () => {
  return (dispatch) => {
    dispatch(actionCreator.getAllCaracters())
    charactersService.getCharacters()
      .then((response) => (response.data))
      .then((response) => {
        dispatch(actionCreator.getAllCaractersSuccess(response.data.results));
      })
      .catch((error) => {
        dispatch(actionCreator.getAllCaractersError(error));
      });
  }
}

export const getCharacterById = (caracterId) => {
  return (dispatch) => {
    dispatch(actionCreator.getCaracterById())
    charactersService.getCharactersById(caracterId)
      .then((response) => (response.data))
      .then((response) => {
        dispatch(actionCreator.getCaracterByIdSuccess(response.data.results))
      })
      .catch((error) => {
        dispatch(actionCreator.getCaracterByIdError(error));
      })
  }
}
