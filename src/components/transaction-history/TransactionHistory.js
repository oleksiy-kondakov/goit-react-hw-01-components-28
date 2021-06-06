import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr className={styles.tableHeadRow}>
        <th className={styles.tableHeadCell}>Type</th>
        <th className={styles.tableHeadCell}>Amount</th>
        <th className={styles.tableHeadCell}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr className={styles.tableBodyRow} key={id}>
          <td className={styles.tableBodyCell}>{type}</td>
          <td className={styles.tableBodyCell}>{amount}</td>
          <td className={styles.tableBodyCell}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
