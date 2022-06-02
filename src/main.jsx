import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Expenses from './routes/Expenses';
import Expense from './routes/Expense';
import Invoices from './routes/Invoices';
import Invoice from './routes/Invoice';

let rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/expenses" element={<Expenses />}>
          <Route
            index
            element={
              <main>
                <h2>Select an expenses</h2>
              </main>
            }
          />
          <Route path=":expenseId" element={<Expense />} />
        </Route>
        <Route path="/invoices" element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: '1rem' }}>
                <h2>Select an invoice</h2>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: '1rem' }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>,
  rootElement
);
