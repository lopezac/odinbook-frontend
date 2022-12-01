import { format } from "date-fns";

export const formatDate = (date: string | Date) => {
  if (!date) return;
  console.log("date at formatDate", date, typeof date);
  if (typeof date === "string") {
    date = new Date(date);
  }
  return format(date, "yyyy-MM-dd");
};
