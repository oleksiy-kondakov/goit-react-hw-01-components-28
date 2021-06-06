import FriendsList from './components/friend-list/List/FriendsList';
import Profile from './components/social-profile/Profile';
import Statistics from './components/statistics/Statistic/Statistics';
import TransactionHistory from './components/transaction-history/TransactionHistory';

import friends from './components/friend-list/List/friends.json';
import user from './components/social-profile/user.json';
import statisticalData from './components/statistics/Statistic/statistical-data.json';
import transactions from './components/transaction-history/transactions.json';

const App = () => (
  <div>
    <FriendsList friends={friends} />
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    <TransactionHistory items={transactions} />
  </div>
);
export default App;
