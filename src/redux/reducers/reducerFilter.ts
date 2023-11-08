import { FILTER } from '../actions/action-type';
import { TypeFilter, TypeFilterAction } from '../../types/types';

const initialStateFilter: TypeFilter[] = [
  { label: 'Все', name: 'all', checked: false },
  { label: 'Без пересадок', name: '0', checked: false },
  { label: '1 пересадка', name: '1', checked: false },
  { label: '2 пересадки', name: '2', checked: false },
  { label: '3 пересадки', name: '3', checked: false },
];

// eslint-disable-next-line @typescript-eslint/default-param-last
export const reducerFilter = (state: TypeFilter[] = initialStateFilter, action: TypeFilterAction) => {
  switch (action.type) {
    case FILTER: {
      const newState: TypeFilter[] = [...state];
      const name = action.payload;
      if (name === 'all') {
        const allChecked = newState[0].checked;
        return newState.map((checkbox) => ({ ...checkbox, checked: !allChecked }));
      }
      const index = newState.findIndex((checkbox) => checkbox.name === name);
      newState[index] = { ...newState[index], checked: !newState[index].checked };
      const allOtherChecked = newState.slice(1).every((checkbox) => checkbox.checked);
      newState[0].checked = allOtherChecked;
      return newState;
    }
    default:
      return state;
  }
};
