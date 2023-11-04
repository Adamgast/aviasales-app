import { TAB_CHEAPEST, TAB_FAST, TAB_OPTIMAL } from '../actions/action-constants';
import { TypeTab, TypeAction } from '../../types/types';

const initialStateTab: TypeTab = {
  tab: TAB_CHEAPEST,
};
//	добавь state если не работает
// eslint-disable-next-line @typescript-eslint/default-param-last
export const reducerTabs = (state: TypeTab = initialStateTab, action: TypeAction) => {
  switch (action.type) {
    case TAB_CHEAPEST:
      return { tab: TAB_CHEAPEST };
    case TAB_OPTIMAL:
      return { tab: TAB_OPTIMAL };
    case TAB_FAST:
      return { tab: TAB_FAST };
    default:
      return state;
  }
};
