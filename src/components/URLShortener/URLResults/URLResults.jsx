import { useState } from 'react';
import URLResult from './URLResult';

const URLResults = ({ results }) => {
  const [lastCopiedId, setLastCopiedId] = useState(null);
  const copyHandler = (id, shortendUrl) => {
    navigator.clipboard
      .writeText(shortendUrl)
      .then(() => {
        setLastCopiedId(id);
      })
      .catch((error) => {
        console.log('Could NOT COPY', error);
      });
  };

  return (
    <div>
      {results.map((result) => (
        <URLResult
          key={result.id}
          {...{
            ...result,
            onCopy: copyHandler,
            isCopied: result.id === lastCopiedId,
          }}
        />
      ))}
    </div>
  );
};

export default URLResults;
