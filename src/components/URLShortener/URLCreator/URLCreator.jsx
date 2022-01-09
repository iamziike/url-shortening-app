import { useEffect, useRef, useState } from 'react';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import classes from './URLCreator.module.css';
import buttonClasses from '../../UI/Button/Button.module.css';
import useFetch from '../../../hooks/useFetch';

const URLCreator = ({ onResultReceived }) => {
  const [urlEntered, setUrlEntered] = useState('');
  const [isEmptyInputError, setIsEmptyInputError] = useState(false);
  const { response, error, isLoading } = useFetch(urlEntered);
  const inputRef = useRef();

  const inputChangeHandler = () => {
    if (isEmptyInputError) setIsEmptyInputError(false);
  };

  const alterEnteredUrl = () => {
    const value = inputRef.current.value.trim();
    if (value.length === 0) {
      setIsEmptyInputError(true);
      return;
    }

    setUrlEntered('https://api.shrtco.de/v2/shorten?url=' + value);
  };

  useEffect(() => {
    if (!response) return false;

    const data = {
      id: Math.random() * 25,
      urlEntered: inputRef.current.value,
      shortendUrl: response.result['short_link'],
    };

    onResultReceived(data);
    inputRef.current.value = '';
  }, [response, inputRef, onResultReceived]);

  return (
    <>
      <Card className={classes.creator}>
        <div
          className={`${classes['input-field-wrapper']} ${
            isEmptyInputError ? classes['input-field-wrapper--empty'] : ''
          }`}
        >
          <input
            type='text'
            placeholder='Shorten a link here...'
            className={`${buttonClasses['btn--bigger-padding']} ${
              classes['input-field']
            } ${isEmptyInputError ? classes['input-value--empty'] : ''}`}
            ref={inputRef}
            onChange={inputChangeHandler}
          />
        </div>
        <Button
          className={`${buttonClasses['btn--primary-design']} ${buttonClasses['btn--bigger-padding']}`}
          onClick={alterEnteredUrl}
        >
          Shorten it!
        </Button>
      </Card>
      {error && <div className={classes['fetch-error']}>{error}</div>}
      {isLoading && <div className={classes.loading}></div>}
    </>
  );
};

export default URLCreator;
