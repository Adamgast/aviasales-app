import { formatPrice, formatDuration, formatTransfersCount, formatDatePeriod } from '../../helpers/validFormats';
import { ITicket } from '../../types/types';

import classes from './Ticket.module.scss';

export const Ticket = ({ ticket }: { ticket: ITicket }) => (
  <article className={classes.ticket}>
    <header className={classes['ticket-header']}>
      <div className={classes['ticket-price']}>{formatPrice(ticket.price)} P</div>
      <img className={classes['ticket-logo']} src={`https://pics.avs.io/99/36/${ticket.carrier}.png`} alt="logo" />
    </header>
    <div className={classes['ticket-data']}>
      <div className={classes['ticket-info']}>
        <div className={classes['ticket-label']}>
          {ticket.segments[0].origin} – {ticket.segments[0].destination}
        </div>
        <div className={classes['ticket-text']}>
          {formatDatePeriod(ticket.segments[0].date, ticket.segments[0].duration)}
        </div>
      </div>
      <div className={classes['ticket-info']}>
        <div className={classes['ticket-label']}>В пути</div>
        <div className={classes['ticket-text']}>{formatDuration(ticket.segments[0].duration)}</div>
      </div>
      <div className={classes['ticket-info']}>
        <div className={classes['ticket-label']}>{formatTransfersCount(ticket.segments[0].stops.length)}</div>
        <div className={classes['ticket-text']}>{ticket.segments[0].stops.join(', ')}</div>
      </div>
    </div>
    <div className={classes['ticket-data']}>
      <div className={classes['ticket-info']}>
        <div className={classes['ticket-label']}>
          {ticket.segments[1].origin} – {ticket.segments[1].destination}
        </div>
        <div className={classes['ticket-text']}>
          {formatDatePeriod(ticket.segments[1].date, ticket.segments[1].duration)}
        </div>
      </div>
      <div className={classes['ticket-info']}>
        <div className={classes['ticket-label']}>В пути</div>
        <div className={classes['ticket-text']}>{formatDuration(ticket.segments[1].duration)}</div>
      </div>
      <div className={classes['ticket-info']}>
        <div className={classes['ticket-label']}>{formatTransfersCount(ticket.segments[1].stops.length)}</div>
        <div className={classes['ticket-text']}>{ticket.segments[1].stops.join(', ')}</div>
      </div>
    </div>
  </article>
);
