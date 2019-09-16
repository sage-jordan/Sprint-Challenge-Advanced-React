import { useLocalStorage } from "./useLocalStorage";

export const useForm = (key, initialValue) => {
  const [data, setData] = useLocalStorage(key, initialValue || {});
  
  return data;
};
