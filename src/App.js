import "./App.css";
import Category from "./admin/category/Category";
import { Route, Routes } from "react-router-dom";
import SubCategory from "./admin/sub category/SubCategory";
import Products from "./admin/products/Products";
import Header from "./admin/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path="/" element={<Header />} /> */}
        <Route path="/category" element={<Category />} />
        <Route path="/sub-category" element={<SubCategory />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
