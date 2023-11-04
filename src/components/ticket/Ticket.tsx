import classes from './Ticket.module.scss';

export const Ticket = () => (
  <article className={classes.ticket}>
    <header className={classes['ticket-header']}>
      <div className={classes['ticket-price']}>13 400 P</div>
      <img className={classes['ticket-logo']} src="" alt="logo" />
    </header>
    <div className={classes['ticket-data']}>
      <div className={classes['ticket-info']}>
        <div className={classes['ticket-label']}>MOW – HKT</div>
        <div className={classes['ticket-text']}>10:45 – 08:00</div>
      </div>
      <div className={classes['ticket-info']}>
        <div className={classes['ticket-label']}>В пути</div>
        <div className={classes['ticket-text']}>21ч 15м</div>
      </div>
      <div className={classes['ticket-info']}>
        <div className={classes['ticket-label']}>2 пересадки</div>
        <div className={classes['ticket-text']}>HKG, JNB</div>
      </div>
    </div>
    <div className={classes['ticket-data']}>
      <div className={classes['ticket-info']}>
        <div className={classes['ticket-label']}>MOW – HKT</div>
        <div className={classes['ticket-text']}>11:20 – 00:50</div>
      </div>
      <div className={classes['ticket-info']}>
        <div className={classes['ticket-label']}>В пути</div>
        <div className={classes['ticket-text']}>13ч 30м</div>
      </div>
      <div className={classes['ticket-info']}>
        <div className={classes['ticket-label']}>1 пересадкa</div>
        <div className={classes['ticket-text']}>HKG</div>
      </div>
    </div>
  </article>
);
