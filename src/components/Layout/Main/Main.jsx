import Card from '../../UI/Card/Card';
import URLShortener from '../../URLShortener/URLShortener';
import classes from './Main.module.css';

const Main = ({ data, className }) => {
  return (
    <main className={`${classes.main} ${className}`}>
      <URLShortener />
      <div className={classes.statistics}>
        <h2 className={classes['header-text']}>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className={classes['stats-list']}>
          {data.statsList.map((stat, index) => {
            return (
              <Card key={index} className={classes.stat}>
                <div className={classes['image-header']}>
                  <img src={stat.imageSrc} alt='stat illustration' />
                </div>
                <h2 className={classes['header-text']}>{stat.intro}</h2>
                <p>{stat.descr}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Main;
