import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./component/home/HomePage";
import AddCategoryPage from './component/categry/AddCategoryPage';
import AllCategoryPage from './component/categry/AllCategoryPage';
import AddProductPage from "./component/product/AddProductPage";
import AllProductPage from "./component/product/AllProductPage";
import AddBrandPage from './component/brand/AddBrandPage';
import AllBrandPage from './component/brand/AllBrandPage';


function App() {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/add-category" element={<AddCategoryPage />} />
                    <Route path="/all-category" element={<AllCategoryPage/>} />
                    <Route path="/add-brand" element={<AddBrandPage/>} />
                    <Route path="/all-brand" element={<AllBrandPage/>} />
                    <Route path="/add-product" element={<AddProductPage />} />
                    <Route path="/all-product" element={<AllProductPage/>} />
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
