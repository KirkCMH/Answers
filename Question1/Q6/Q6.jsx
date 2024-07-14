/** Please write the sample code to debounce handleOnChange (Do not use 
any 3th party libs other than react) **/

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set debouncedValue to value after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");
  const debouncedSearchTerm = useDebounce(inputValue, 500); // 500ms delay

  useEffect(() => {
    // Effect for API call or any side effects
    if (debouncedSearchTerm) {
      console.log("API call with:", debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  handleOnChange = (event) => {
    // make ajax call
    setInputValue(event.target.value);
  };

  return <input type="search" name="p" onChange={handleOnChange} />;
};
