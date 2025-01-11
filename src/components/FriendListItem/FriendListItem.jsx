import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  //console.log({ avatar, name, isOnline });
  return (
    <div className={css.friend}>
      <img src={avatar} alt={`Avatar of ${name}`} width="48" />
      <p className={css.name}>{name}</p>
      <p className={isOnline ? css.online : css.offline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
