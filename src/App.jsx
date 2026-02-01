import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import StockList from './pages/StockList';
import PurchaseEntry from './pages/PurchaseEntry';
import SalesEntry from './pages/SalesEntry';
import SupplierList from './pages/SupplierList';
import CustomerList from './pages/CustomerList';
import Ledger from './pages/Ledger';
import PaymentEntry from './pages/PaymentEntry';
import Invoice from './pages/Invoice';
import Settings from './pages/Settings';
import Login from './pages/Login';
import DailyExpense from './pages/DailyExpense';
import MonthlyExpense from './pages/MonthlyExpense';
import ExpenseReport from './pages/ExpenseReport';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="stock" element={<StockList />} />
          <Route path="purchase" element={<PurchaseEntry />} />
          <Route path="sales" element={<SalesEntry />} />
          <Route path="parties/suppliers" element={<SupplierList />} />
          <Route path="parties/customers" element={<CustomerList />} />
          <Route path="ledger" element={<Ledger />} />
          <Route path="payments" element={<PaymentEntry />} />
          <Route path="invoice" element={<Invoice />} />
          <Route path="expenses/daily" element={<DailyExpense />} />
          <Route path="expenses/monthly" element={<MonthlyExpense />} />
          <Route path="expenses/report" element={<ExpenseReport />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
