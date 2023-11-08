import { Dispatch } from 'react';

import { ITicket, TypeTicketsAction } from '../../types/types';
import { getSearchId } from '../../services/getSearchId';
import { getTickets } from '../../services/getTickets';

import {
  TAB_CHEAPEST,
  TAB_FAST,
  TAB_OPTIMAL,
  FILTER,
  FETCH_TICKETS_FINISH,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_ERROR,
  LOADING_OFF,
  LOADING_ON,
  SHOW_MORE,
} from './action-type';

export const tabCheapest = () => ({ type: TAB_CHEAPEST });
export const tabFast = () => ({ type: TAB_FAST });
export const tabOptimal = () => ({ type: TAB_OPTIMAL });

export const toggleFilter = (name: string) => ({ type: FILTER, payload: name });

const loadingOn = () => ({ type: LOADING_ON });
const loadingOff = () => ({ type: LOADING_OFF });

const fetchTicketsFinish = () => ({ type: FETCH_TICKETS_FINISH });
const fetchTicketsSuccess = (tickets: ITicket[]) => ({ type: FETCH_TICKETS_SUCCESS, payload: tickets });
const fetchTicketsError = (error: string) => ({ type: FETCH_TICKETS_ERROR, payload: error });
export const showMoreTickets = () => ({ type: SHOW_MORE });

const getDataTickets = async (id: string, dispatch: Dispatch<TypeTicketsAction>) => {
  try {
    const { tickets, stop } = await getTickets(id);
    if (stop) {
      dispatch(fetchTicketsFinish());
      dispatch(loadingOff());
    } else if (tickets.length) {
      dispatch(fetchTicketsSuccess(tickets));
      getDataTickets(id, dispatch);
    }
  } catch (err: any) {
    if (err.message === 'Status code 500') {
      getDataTickets(id, dispatch);
    } else {
      dispatch(fetchTicketsError(err.message));
    }
  }
};

export const getData = () => async (dispatch: Dispatch<TypeTicketsAction>) => {
  const id: string = await getSearchId();
  dispatch(loadingOn());
  await getDataTickets(id, dispatch);
};
