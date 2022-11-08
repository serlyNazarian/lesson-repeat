import "./App.css";
import Category from "./admin/category/Category";
import { Route, Routes } from "react-router-dom";
import SubCategory from "./admin/sub category/SubCategory";
import Products from "./admin/products/Products";
import Header from "./admin/header/Header";
import SinglePage from "./admin/category/SinglePage";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Routes>
        {/* <Route path="/" element={<Header />} /> */}
        <Route path="/category" element={<Category />} />
        <Route path="/sub-category" element={<SubCategory />} />
        <Route path="/products" element={<Products />} />
        <Route path="/category/:id" element={<SinglePage />} />
      </Routes>
    </div>
  );
}

export default App;
