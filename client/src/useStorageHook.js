import { useLocalStorage } from "./useLocalStorage";

export const useStorageHook = (key, initialValue) => {
  const [data, setData] = useLocalStorage(key, initialValue || {});
  
  return data;
};
