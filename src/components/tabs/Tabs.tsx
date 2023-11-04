import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { TypeState } from '../../types/types';
import { TAB_CHEAPEST, TAB_FAST, TAB_OPTIMAL } from '../../redux/actions/action-constants';
import { getTabCheapest, getTabFast, getTabOptimal } from '../../redux/actions/action-creators';

import classes from './Tabs.module.scss';

export const Tabs = () => {
  const activeTab = useSelector((state: TypeState) => state.tab.tab);
  const dispatch = useDispatch();

  return (
    <nav className={classes.tabs}>
      <button
        onClick={() => dispatch(getTabCheapest())}
        className={classNames(classes['tabs-button'], activeTab === TAB_CHEAPEST && classes.active)}
        type="button"
      >
        Самый дешевый
      </button>
      <button
        onClick={() => dispatch(getTabFast())}
        className={classNames(classes['tabs-button'], activeTab === TAB_FAST && classes.active)}
        type="button"
      >
        Самый быстрый
      </button>
      <button
        onClick={() => dispatch(getTabOptimal())}
        className={classNames(classes['tabs-button'], activeTab === TAB_OPTIMAL && classes.active)}
        type="button"
      >
        Оптимальный
      </button>
    </nav>
  );
};
