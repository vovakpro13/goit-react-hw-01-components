import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import FriendList from 'components/FriendList';
import TransactionHistory from 'components/TransactionHistory';

import user from 'store/user.json';
import stats from 'store/stats.json';
import friends from 'store/friends.json';
import transactions from 'store/transactions.json';

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

      <br />

      <Statistics title="Upload stats" stats={stats} />

      <br />

      <Statistics stats={stats} />

      <br />

      <FriendList friends={friends} />

      <br />

      <TransactionHistory items={transactions} />
    </div>
  );
};
