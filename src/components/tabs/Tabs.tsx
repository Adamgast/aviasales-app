import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { TypeState } from '../../types/types';
import { TAB_CHEAPEST, TAB_FAST, TAB_OPTIMAL } from '../../redux/actions/action-type';
import { tabCheapest, tabFast, tabOptimal } from '../../redux/actions/action-creators';

import classes from './Tabs.module.scss';

export const Tabs = () => {
  const activeTab = useSelector((state: TypeState) => state.tab.tab);
  const dispatch = useDispatch();

  return (
    <nav className={classes.tabs}>
      <button
        onClick={() => dispatch(tabCheapest())}
        className={classNames(classes['tabs-button'], activeTab === TAB_CHEAPEST && classes.active)}
        type="button"
      >
        Самый дешевый
      </button>
      <button
        onClick={() => dispatch(tabFast())}
        className={classNames(classes['tabs-button'], activeTab === TAB_FAST && classes.active)}
        type="button"
      >
        Самый быстрый
      </button>
      <button
        onClick={() => dispatch(tabOptimal())}
        className={classNames(classes['tabs-button'], activeTab === TAB_OPTIMAL && classes.active)}
        type="button"
      >
        Оптимальный
      </button>
    </nav>
  );
};
