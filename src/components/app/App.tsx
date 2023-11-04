import { Filter } from '../filter/Filter';
import { Tabs } from '../tabs/Tabs';
import { TicketsList } from '../tickets-list/TicketsList';

import classes from './App.module.scss';

export const App = () => (
  <div className={classes['aviaseals-container']}>
    <div className={classes['main-logo']}>
      <img src="/images/main-logo.svg" alt="logo aviasales" />
    </div>
    <main className={classes['aviaseals-main']}>
      <Filter />
      <section className={classes.content}>
        <Tabs />
        <TicketsList />
        <button className={classes['show-more']} type="button">
          Показать еще 5 билетов!
        </button>
      </section>
    </main>
  </div>
);
