import { FETCH_TICKETS_FINISH, FETCH_TICKETS_ERROR, FETCH_TICKETS_SUCCESS, SHOW_MORE } from '../actions/action-type';
import { TypeTicketsAction, TypeTickets, ITicket } from '../../types/types';

const initialStateTickets: TypeTickets = {
  tickets: [],
  error: null,
  countShowTickets: 5,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export const reducerTickets = (state: TypeTickets = initialStateTickets, action: TypeTicketsAction) => {
  switch (action.type) {
    case FETCH_TICKETS_FINISH:
      return { ...state, error: null };
    case FETCH_TICKETS_SUCCESS:
      return { ...state, tickets: [...state.tickets, ...(action.payload as ITicket[])] };
    case FETCH_TICKETS_ERROR:
      return { ...state, tickets: [], error: action.payload };
    case SHOW_MORE:
      return { ...state, countShowTickets: state.countShowTickets + 5 };
    default:
      return state;
  }
};
