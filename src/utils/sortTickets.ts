import { TAB_CHEAPEST, TAB_FAST, TAB_OPTIMAL } from '../redux/actions/action-type';
import { ITicket } from '../types/types';

export const sortTickets = (tickets: ITicket[], tab: string) => {
  const newTickets = [...tickets];
  switch (tab) {
    case TAB_CHEAPEST:
      return newTickets.sort((a, b) => a.price - b.price);
    case TAB_FAST:
      return newTickets.sort((a, b) => a.segments[0].duration - b.segments[0].duration);
    case TAB_OPTIMAL:
      return newTickets.sort((a, b) => a.segments[0].duration + a.price - (b.segments[0].duration + b.price));
    default:
      return tickets;
  }
};
