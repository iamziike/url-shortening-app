import Button from '../../UI/Button/Button';
import Navbar from '../../Navbar/Navbar';
import buttonClasses from '../../UI/Button/Button.module.css';
import classes from './Header.module.css';

const Header = ({ className }) => {
  return (
    <header className={`${classes.header} ${className}`}>
      <Navbar />
      <div className={classes.hero}>
        <div className={classes['text-content']}>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button
            className={`${buttonClasses['btn--primary-design']} ${buttonClasses['btn--border-radius']} ${buttonClasses['btn--bigger-padding']}`}
          >
            Get Started
          </Button>
        </div>
        <div className={classes['image-content']}>
          <img
            src='https://res.cloudinary.com/dnagee/image/upload/v1641599521/shortly/illustration-working_t5l0rh.svg'
            alt='hero illustration'
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
