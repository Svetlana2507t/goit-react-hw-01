import css from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
  if (!transactions || transactions.length === 0) {
    return <p>No transactions available.</p>;
  }
  return (
    <div className={css.transactions}>
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td className={css.type}>{transaction.type}</td>
              <td className={css.amount}>{transaction.amount}</td>
              <td className={css.currency}>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TransactionHistory;
