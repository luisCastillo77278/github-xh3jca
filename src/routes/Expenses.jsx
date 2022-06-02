import { Outlet, useSearchParams } from 'react-router-dom';
import QueryLink from '../components/QueryLink';
import { getExpenses } from '../expenses';

const Expenses = () => {
  const expenses = getExpenses();
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div style={{ displey: 'flex' }}>
      <nav
        style={{
          borderRight: 'solid 1px',
          padding: '1rem',
        }}
      >
        <input
          value={searchParams.get('filter') || ''}
          onChange={(e) => {
            const filter = e.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />

        {expenses
          .filter((expense) => {
            let filter = searchParams.get('filter');
            if (!filter) return true;
            let name = expense.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((expense) => (
            <QueryLink
              style={({ isActive }) => {
                return {
                  display: 'block',
                  margin: '1rem 0',
                  color: isActive ? 'red' : '',
                };
              }}
              to={`/expenses/${expense.number}`}
              key={expense.number}
            >
              {expense.name}
            </QueryLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default Expenses;
