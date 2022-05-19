import {BrowserRouter,Route,Routes,Navigate } from "react-router-dom";
import CustomerHome from './pages/customer/customer_home';
import FarmerHome from './pages/farmer/farmer_home';
import AllProducts from './pages/products';
import CreateProduct from './pages/farmer/create_product';
import SingleProduct from './pages/view_single_product';
import ShoppingCart from './pages/cart';
import LogIn from './pages/sign_in'
import SignUp from './pages/sign_up'
import './static/css/global.css'
function App() {
  const user = false;

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/customer" element={<CustomerHome/>}/>
        <Route path="/farmer" element={<FarmerHome/>}/>
        <Route path="/products" element={<AllProducts/>}/>
        <Route path="/create_product" element={<CreateProduct/>}/>
        <Route path="/products/:id" element={<SingleProduct/>}/>
        <Route path="/cart" element={<ShoppingCart/>}/>
        <Route path="/" element={ user ? <Navigate  to='/products' /> : <LogIn/>}/>
        <Route path="/sign_up" element={ user ? <Navigate  to='/products' /> : <SignUp/>}/>




      </Routes>
      
          
        
      </BrowserRouter>
    </div>
  );
}

export default App;
