import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Contact from "../Pages/Contact"
import Product from "../Pages/Product"

function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route path="category/:categoryId" element={<Home/>}/>
                </Route>
                <Route path="product/:productId" element={<Product/>}/>
                <Route path="/products" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </>
    )
}

export default AppRoutes