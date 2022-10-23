import React from 'react';
import PropTypes from 'prop-types';

import styles from 'components/Statistics/styles.module.css';
import { getRandomColor } from 'helpers/getRandomColor';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title?.length && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} style={{ background: getRandomColor() }}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
