import { TypeLoading, TypeLoadingAction } from '../../types/types';
import { LOADING_ON, LOADING_OFF } from '../actions/action-type';

const initialStateLoading: TypeLoading = {
  loading: false,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export const reducerLoading = (state: TypeLoading = initialStateLoading, action: TypeLoadingAction) => {
  switch (action.type) {
    case LOADING_ON:
      return { loading: true };
    case LOADING_OFF:
      return { loading: false };
    default:
      return state;
  }
};
