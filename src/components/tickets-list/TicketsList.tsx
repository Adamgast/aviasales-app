import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Spin, Alert } from 'antd';

import { filterTickets } from '../../utils/filterTickets';
import { sortTickets } from '../../utils/sortTickets';
import { showMoreTickets } from '../../redux/actions/action-creators';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useActions } from '../../hooks/useActions';
import { Ticket } from '../ticket/Ticket';
import { ITicket, TypeFilter, TypeLoading, TypeState, TypeTab, TypeTickets } from '../../types/types';

import classes from './TicketsList.module.scss';

export const TicketsList = () => {
  const dispatch = useDispatch();
  const { getData } = useActions();
  const ticketsData: TypeTickets = useAppSelector((state: TypeState) => state.ticketsData);
  const filter: TypeFilter[] = useAppSelector((state: TypeState) => state.filter);
  const tab: TypeTab = useAppSelector((state: TypeState) => state.tab);
  const loading: TypeLoading = useAppSelector((state: TypeState) => state.loading);
  const { tickets, countShowTickets, error } = ticketsData;

  useEffect(() => {
    getData();
  }, []);

  const uploadTickets = useMemo(() => filterTickets(sortTickets(tickets, tab.tab), filter), [tickets, tab.tab, filter]);

  const spinner = loading.loading && !error && (
    <div className={classes['spin-box']}>
      <Spin size="large" />
    </div>
  );

  const errorMessage = error && <Alert message="Ошибка" description={error} type="error" showIcon />;

  const warningMessage = !loading.loading && uploadTickets.length === 0 && (
    <Alert
      message="Внимание"
      description="Рейсов, подходящих под заданные фильтры, не найдено."
      type="warning"
      showIcon
    />
  );

  return (
    <>
      <ul className={classes['tickets-list']}>
        {spinner}
        {errorMessage}
        {warningMessage}
        {uploadTickets.slice(0, countShowTickets).map((ticket: ITicket) => (
          <li key={uuidv4()}>
            <Ticket ticket={ticket} />
          </li>
        ))}
      </ul>
      {uploadTickets.length > 0 && (
        <button onClick={() => dispatch(showMoreTickets())} className={classes['show-more']} type="button">
          Показать еще 5 билетов!
        </button>
      )}
    </>
  );
};
