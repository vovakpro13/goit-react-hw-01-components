import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from 'components/FriendList/FriendListItem/styles.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.itemRoot}>
      <span
        className={classNames(styles.status, { [styles.online]: isOnline })}
      />

      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />

      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendListItem;
