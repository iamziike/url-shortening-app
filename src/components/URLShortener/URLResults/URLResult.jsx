import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import buttonClasses from '../../UI/Button/Button.module.css';
import classes from './URLResult.module.css';

const URLResult = ({ id, urlEntered, shortendUrl, onCopy, isCopied }) => {
  const clickHandler = () => {
    if (isCopied) return;
    onCopy(id, shortendUrl);
  };

  let classNames = buttonClasses['btn--primary-design'];
  let textContent = 'Copy';

  if (isCopied) {
    classNames += ` ${classes['button--copied']}`;
    textContent = 'Copied !';
  }

  return (
    <Card className={classes['url-result']}>
      <div>{urlEntered}</div>
      <div>
        <div className={classes['shortend-url']}>{shortendUrl}</div>
        <Button className={classNames} onClick={clickHandler}>
          {textContent}
        </Button>
      </div>
    </Card>
  );
};

export default URLResult;
