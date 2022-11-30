import { useState } from "react";

const useSessionStorage = <T>(
  key: string,
  initialValue: T | null = null
): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value: T) => {
    const stringValue = JSON.stringify(value);
    setStoredValue(stringValue);
    sessionStorage.setItem(key, stringValue);
  };

  return [storedValue, setValue];
};

export { useSessionStorage };
