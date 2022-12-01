import { useState } from "react";

export const useMemoryStore = <T>(
  key: string,
  initialValue: T | null = null
): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value: T) => {
    const stringValue = JSON.stringify(value);
    setStoredValue(stringValue);
    localStorage.setItem(key, stringValue);
  };

  return [storedValue, setValue];
};
