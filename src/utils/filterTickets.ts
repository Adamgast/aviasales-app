import { ITicket, TypeFilter } from '../types/types';

export const filterTickets = (sortedTickets: ITicket[], filter: TypeFilter[]) => {
  const arrCheckedFilter: string[] = [];

  filter.forEach((checkbox) => checkbox.checked && arrCheckedFilter.push(checkbox.name));

  return sortedTickets.filter((ticket) => {
    const countTransfersFirst = ticket.segments[0].stops.length.toString();
    const countTransfersSecond = ticket.segments[1].stops.length.toString();
    return arrCheckedFilter.includes(countTransfersFirst) || arrCheckedFilter.includes(countTransfersSecond);
  });
};
