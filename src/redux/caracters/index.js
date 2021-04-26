import { useDispatch, useSelector } from 'react-redux';

import { reducer, INITIAL_STATE } from './reducer'
import * as thunks from '../thunks/caracters'

export const useCaracters = () => {
  const state = useSelector(state => state.caracters);

  const dispatch = useDispatch();

  const actions = {
    getAllCaracters: () => {
      dispatch(thunks.getCharacters())
    },
    getCaracterById: (caracterId) => {
      dispatch(thunks.getCharacterById(caracterId))
    },
  }

  return {
    ...state,
    ...actions
  }
}

export default {
  reducer,
  INITIAL_STATE,
}
