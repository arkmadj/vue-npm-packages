import format from 'date-fns/format';

const date = (date) => date && formatDate(date, 'dd-MMM-yyyy');

const formatDate = (date, formatType) => format(date instanceof Date ? date : new Date(date.includes('Z') ? date : date.replace(/-/g, "/")), formatType)

export default { date };
