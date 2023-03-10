
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import AddressForm from '../src/components/checkout/AddressForm';
import PaymentForm from './components/checkout/PaymentForm';
import Review from './components/checkout/Review';
import Checkout from './components/checkout/Checkout';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/material_ui_step_form" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/material_ui_step_form/addressform" element={<AddressForm />} />
          <Route path="/material_ui_step_form/paymentform" element={<PaymentForm />} />
          <Route path="/material_ui_step_form/review" element={<Review />} />
          <Route path="/material_ui_step_form/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
