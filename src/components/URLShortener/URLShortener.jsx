import { useCallback, useState } from 'react';
import URLCreator from './URLCreator/URLCreator';
import URLResults from './URLResults/URLResults';

const URLShortener = () => {
  const [results, setResults] = useState([]);

  const resultReceivedHandler = useCallback((data) => {
    setResults((prevResults) => [...prevResults, data]);
  }, []);

  return (
    <div>
      <URLCreator
        {...{
          onResultReceived: resultReceivedHandler,
        }}
      ></URLCreator>
      <URLResults {...{ results }} />
    </div>
  );
};

export default URLShortener;
