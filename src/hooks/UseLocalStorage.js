import { useState } from "react";

// eslint-disable-next-line import/prefer-default-export
export const useLocalStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      }
      window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
      return defaultValue;
    } catch (err) {
      return defaultValue;
    }
  });

  const setToken = (newToken) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newToken));
    } catch (err) {
      /* empty */
    }
    setStoredValue(newToken);
  };

  return [storedValue, setToken];
};
