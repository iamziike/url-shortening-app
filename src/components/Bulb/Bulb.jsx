import classes from './Bulb.module.css';
import { ReactComponent as BulbImage } from '../../assets/images/sun-svgrepo-com.svg';

const Bulb = ({ onToggleTheme }) => {
  return (
    <div className={classes.bulb}>
      <BulbImage onClick={onToggleTheme} />
    </div>
  );
};

export default Bulb;
