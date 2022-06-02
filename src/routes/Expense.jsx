import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { getExpense, deleteExpense } from '../expenses';
const Expense = () => {
  const { expenseId } = useParams();
  const expense = getExpense(Number(expenseId));
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <main style={{ padding: '1rem' }}>
      <h2>Total Due: {Expense.amount}</h2>
      <p>
        {expense.name}: {expense.number}
      </p>
      <p>Due Date: {expense.due}</p>
      <p>
        <button
          onClick={() => {
            deleteExpense(Number(expenseId));
            navigate('/expenses' + location.search);
          }}
        >
          delete
        </button>
      </p>
    </main>
  );
};

export default Expense;
