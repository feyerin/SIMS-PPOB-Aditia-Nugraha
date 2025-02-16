import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./store/store";
import PublicRoute from "./utils/publicRoute";
import Login from './pages/auth/login/containers/login';
import Dashboard from './pages/homepage/containers/homepage';
import Account from './pages/account/containers/account';
import Transaction from './pages/transaction/containers/transaction';
import Register from './pages/auth/register/containers/register';
import Layout from './components/layout';
import Topup from 'pages/topup/containers/topup';
import Payment from 'pages/payment/containers/payment';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
          
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
          </Route>

          <Route path="/" element={<Layout/>} >
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/akun" element={<Account/>} />
            <Route path="/transaksi" element={<Transaction/>} />
            <Route path="/topup" element={<Topup/>} />
            <Route path="/payment" element={<Payment/>} />
          </Route>
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
        </Provider>
    </div>
  );
}

export default App;
