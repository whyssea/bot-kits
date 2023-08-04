export const timeZoneUTC = [
  'UTC-12:00',
  'UTC-11:00',
  'UTC-10:00',
  'UTC-9:30',
  'UTC-9:00',
  'UTC-8:00',
  'UTC-7:00',
  'UTC-6:00',
  'UTC-5:00',
  'UTC-04:00',
  'UTC-3:30',
  'UTC-03:00',
  'UTC-2:00',
  'UTC-1:00',
  'UTC+00:00',
  'UTC+1:00',
  'UTC+3:00',
  'UTC+3:30',
  'UTC+4:00',
  'UTC+4:30',
  'UTC+5:00',
  'UTC+5:30',
  'UTC+05:45',
  'UTC+6:00',
  'UTC+6:30',
  'UTC+7:00',
  'UTC+8:00',
  ' UTC+8:45',
  'UTC+9:00',
  'UTC+09:30',
  'UTC+10:00',
  'UTC+10:30',
  'UTC+11:00',
  'UTC+12:00',
  'UTC+12:45',
  'UTC+13:00',
  'UTC+14:00',
];

export const formatDate = (date: string, timeZone: string | undefined) => {
  const d = date.toString().slice(0, 24);
  const zoneGTM = timeZone?.replace('UTC', 'GMT');
  const res = `${d} ${zoneGTM?.replace(':', '')}`;
  return new Date(res);
};

export const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

export const minutes = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31',
  '32',
  '33',
  '34',
  '35',
  '36',
  '37',
  '38',
  '39',
  '40',
  '41',
  '42',
  '43',
  '44',
  '45',
  '46',
  '47',
  '48',
  '49',
  '50',
  '51',
  '52',
  '53',
  '54',
  '55',
  '56',
  '57',
  '58',
  '59',
  '00',
];
