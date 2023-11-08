import { combineReducers } from 'redux';

import { reducerFilter } from './reducerFilter';
import { reducerLoading } from './reducerLoading';
import { reducerTabs } from './reducerTabs';
import { reducerTickets } from './reducerTickets';

export const reducerRoot = combineReducers({
  filter: reducerFilter,
  tab: reducerTabs,
  ticketsData: reducerTickets,
  loading: reducerLoading,
});
