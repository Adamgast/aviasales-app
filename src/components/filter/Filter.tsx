import { useDispatch, useSelector } from 'react-redux';

import { TypeFilter, TypeState } from '../../types/types';

import classes from './Filter.module.scss';

export const Filter = () => {
  const filter = useSelector((state: TypeState) => state.filter);
  const dispatch = useDispatch();

  return (
    <section className={classes.filter}>
      <h2 className={classes['filter-title']}>Количество пересадок</h2>
      <div className={classes['filter-list']}>
        {filter.map((item: TypeFilter) => (
          <label key={item.name} className={classes['filter-label']} htmlFor={item.name}>
            <input
              onChange={() => dispatch({ type: 'filter', payload: item.name })}
              className={classes['filter-checkbox']}
              type="checkbox"
              checked={item.checked}
              id={item.name}
            />
            <span>{item.label}</span>
          </label>
        ))}
      </div>
    </section>
  );
};
