import { combineReducers } from 'redux';

import { reducerFilter } from './reducer-filter';
import { reducerTabs } from './reducer-tabs';

export const reducer = combineReducers({ filter: reducerFilter, tab: reducerTabs });
