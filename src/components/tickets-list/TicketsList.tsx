import { Ticket } from '../ticket/Ticket';

import classes from './TicketsList.module.scss';

export const TicketsList = () => (
  <ul className={classes['tickets-list']}>
    <li>
      <Ticket />
    </li>
    <li>
      <Ticket />
    </li>
    <li>
      <Ticket />
    </li>
    <li>
      <Ticket />
    </li>
    <li>
      <Ticket />
    </li>
  </ul>
);
