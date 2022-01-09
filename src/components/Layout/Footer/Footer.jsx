import Button from '../../UI/Button/Button';
import buttonClasses from '../../UI/Button/Button.module.css';
import classes from './Footer.module.css';

import { ReactComponent as FacebookIcon } from '../../../assets/images/icon-facebook.svg';
import { ReactComponent as PinterestIcon } from '../../../assets/images/icon-pinterest.svg';
import { ReactComponent as InstagramIcon } from '../../../assets/images/icon-instagram.svg';
import { ReactComponent as TwitterIcon } from '../../../assets/images/icon-twitter.svg';

const socials = [
  <FacebookIcon />,
  <PinterestIcon />,
  <InstagramIcon />,
  <TwitterIcon />,
];

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={`${classes.billboard} default-padding`}>
        <h2>Boost your links today</h2>
        <Button
          className={`${buttonClasses['btn--primary-design']} ${buttonClasses['btn--border-radius']} ${buttonClasses['btn--bigger-padding']}`}
        >
          Get Started
        </Button>
      </div>
      <div className={`${classes['tab-bar']} default-padding`}>
        <div className={classes['logo-wrapper']}>
          <img
            src='https://res.cloudinary.com/dnagee/image/upload/v1641600737/shortly/logo-white_wzpvon.svg'
            alt='logo'
          />
        </div>
        <div className={classes.sitemap}>
          <ul>
            <h3>Features</h3>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
          <ul>
            <h3>Resources</h3>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
          <ul>
            <h3>Company</h3>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <ul className={classes.socials}>
          {socials.map((socialIcon, index) => (
            <li key={index}>{socialIcon}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
