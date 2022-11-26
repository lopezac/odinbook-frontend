export const SessionStorage = {
  get: (key: string) => {
    return sessionStorage.getItem(key);
  },
  set: (key: string, value: object | string) => {
    if (typeof value === "object") {
      value = JSON.stringify(value);
    }
    return sessionStorage.setItem(key, value);
  },
  remove: (key: string) => {
    return sessionStorage.removeItem(key);
  },
  clear: () => {
    return sessionStorage.clear();
  },
};
