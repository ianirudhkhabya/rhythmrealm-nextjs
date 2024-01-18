import { useState, useEffect } from "react";

{
  /*
  We don't want to refetch our songs on every single input we write, so here,
  we want to add a bit of a delay so that when user stops typing then only we're going to refetch the songs.
*/
}

function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay || 500);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
