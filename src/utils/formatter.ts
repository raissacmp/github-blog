import moment from "moment";

export function dateFormatter(props: string) {
  const date = moment(props);
  const formattedDate = date.fromNow();
  return formattedDate;
}
