import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import Checkout from './components/Chackout/AddItem';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import AddItem from './components/Chackout/AddItem';
import MyItems from './components/Chackout/MyItems';
import About from './components/About/About';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/product/:productId" element={
          <RequireAuth>
            <ProductDetail></ProductDetail>
          </RequireAuth>
        }></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path="/additem" element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path="/myItem" element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
