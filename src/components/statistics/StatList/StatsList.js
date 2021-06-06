import PropTypes from 'prop-types';
import styles from './StatList.module.css';

const generateItemColor = (min, max) => {
  const itemColor = `rgb(
      ${Math.random() * (max - min) + min},
      ${Math.random() * (max - min) + min},
      ${Math.random() * (max - min) + min}
  )`;

  return itemColor;
};

const StatsList = ({ stats, label, percentage }) => (
  <ul className={styles.statList}>
    {stats.map(({ id, label, percentage }) => (
      <li
        className={styles.item}
        style={{ backgroundColor: generateItemColor(0, 255) }}
        key={id}
      >
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage}%</span>
      </li>
    ))}
  </ul>
);

StatsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatsList;
