import PropTypes from 'prop-types';
import styles from './FriendsListItem.module.css';
import defaultFriendAvatar from './defaultFriendAvatar.svg';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  const status = isOnline ? styles.online : styles.offline;

  return (
    <li className={styles.item}>
      <span className={status}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendsListItem.defaultProps = {
  avatar: defaultFriendAvatar,
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;
