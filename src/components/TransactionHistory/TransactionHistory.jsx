//import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => {
  if (!transactions || transactions.length === 0) {
    return <p>No transactions available.</p>;
  }
  return (
    <div>
      <h1>Transaction History</h1>
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
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TransactionHistory;
