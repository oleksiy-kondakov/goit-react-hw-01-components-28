import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import StatsList from '../StatList/StatsList';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <StatsList stats={stats} />
  </section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Statistics;
