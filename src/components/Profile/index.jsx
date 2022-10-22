import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/Profile/styles.module.css';
import classNames from 'classnames';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="User avatar" className={styles.avatar} />
        <p className={classNames(styles.mb10, styles.name)}>{username}</p>
        <p className={classNames(styles.mb10, styles.greyColor)}>@{tag}</p>
        <p className={styles.greyColor}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>

        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>

        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
