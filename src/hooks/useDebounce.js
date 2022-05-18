import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
  const [deboucedValue, setdebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setdebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value]);
  return deboucedValue;
}

export default useDebounce;
