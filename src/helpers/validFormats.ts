import { format } from 'date-fns';

export const formatPrice = (price: number) => String(price).replace(/(\d)(?=(\d{3})+$)/g, '$1 ');

export const formatDuration = (duration: number) => {
  const hours: number | string = Math.floor(duration / 60);
  const minutes: number | string = duration % 60;
  return `${hours}ч ${minutes}м`;
};

export const formatTransfersCount = (countTransfers: number) => {
  let transferText: string;
  if (countTransfers === 1) {
    transferText = '1 пересадка';
  } else if (countTransfers > 1 && countTransfers <= 4) {
    transferText = `${countTransfers} пересадки`;
  } else if (countTransfers >= 5) {
    transferText = `${countTransfers} пересадок`;
  } else {
    transferText = 'Нет пересадок';
  }
  return transferText;
};

export const formatDatePeriod = (date: string, duration: number) => {
  const startTimePeriod = format(new Date(date), 'HH:mm');
  const endTimePeriod = format(new Date(new Date(date).getTime() + duration * 60000), 'HH:mm');
  return `${startTimePeriod} - ${endTimePeriod}`;
};
