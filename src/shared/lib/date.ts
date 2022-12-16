import { format } from "date-fns";

export const formatDate = (date: string | Date, type?: string) => {
  if (!date) return;
  if (typeof date === "string") {
    date = new Date(date);
  }
  return format(date, type === "short" ? "PP" : "PPpp");
};
