import Profile from 'components/Profile';
import Statistics from 'components/Statistics';

import user from 'constants/user.json';
import stats from 'constants/stats.json';


export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <br/>
      <Statistics title="Upload stats" stats={stats} />
      <br/>
      <Statistics stats={stats} />
    </div>
  );
};
