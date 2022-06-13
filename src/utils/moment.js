import moment from "moment";
import { isDate } from "lodash";

const formatDate = "DD MMMM YYYY HH:mm";
export const Moment = (date) => {
  return isDate(date) ? moment(date).format(formatDate) : new Date(date);
};
