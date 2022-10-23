import React from 'react';
import PropTypes from 'prop-types';

import FriendListItem from 'components/FriendList/FriendListItem';
import styles from 'components/FriendList/styles.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(props => (
        <FriendListItem key={props.id} {...props} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.instanceOf(FriendListItem)),
};

export default FriendList;
