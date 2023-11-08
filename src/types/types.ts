// Типы initialState ===================
export type TypeTab = { tab: string };
export type TypeFilter = {
  label: string;
  name: string;
  checked: boolean;
};
export type TypeTickets = {
  tickets: ITicket[];
  error: null | string;
  countShowTickets: number;
};
export type TypeLoading = {
  loading: boolean;
};
export type TypeState = {
  tab: TypeTab;
  filter: TypeFilter[];
  ticketsData: TypeTickets;
  loading: TypeLoading;
};
// Типы initialState ===================

// Типы Action ===================
export type TypeTabAction = { type: string };
export type TypeFilterAction = { type: string; payload: string };
export type TypeTicketsAction = { type: string; payload?: ITicket[] | string };
export type TypeLoadingAction = { type: string };
// Типы Action ===================

export interface ITicket {
  // Цена в рублях
  price: number;
  // Код авиакомпании (iata)
  carrier: string;
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: [
    {
      // Код города (iata)
      origin: string;
      // Код города (iata)
      destination: string;
      // Дата и время вылета туда
      date: string;
      // Массив кодов (iata) городов с пересадками
      stops: string[];
      // Общее время перелёта в минутах
      duration: number;
    },
    {
      // Код города (iata)
      origin: string;
      // Код города (iata)
      destination: string;
      // Дата и время вылета обратно
      date: string;
      // Массив кодов (iata) городов с пересадками
      stops: string[];
      // Общее время перелёта в минутах
      duration: number;
    },
  ];
}
