import PropTypes from 'prop-types';
import styles from './FriendsList.module.css';
import FriendsListItem from '../ListItem/FriendsListItem';

const FriendsList = ({ friends }) => (
  <ul className={styles.friendsList}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendsListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendsList;
