import { format } from "date-fns";

export const formatDate = (date: string | Date, type?: string) => {
  if (!date) return;
  if (typeof date === "string") {
    date = new Date(date);
  }

  if (type === "short") return format(date, "PP");
  else if (type === "input") return format(date, "y-MM-dd");
  else return format(date, "PPpp");
};
