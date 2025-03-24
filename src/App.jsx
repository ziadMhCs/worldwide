import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Product from "./pages/product"
import HomePage from "./pages/HomePage"
import Pricing from "./pages/Pricing"
import PageNotFound from "./pages/PageNotFound"
import AppLayout from "./pages/AppLayout"
import Login from "./pages/Login"

export default function App(){

  return(


<>
<BrowserRouter>
<Routes>
<Route path="product" element={<Product/>} />
<Route path="/" element={<HomePage/>} />
<Route path="pricing" element={<Pricing/>} />
<Route path="/app" element={<AppLayout/>} />
<Route path="/login" element={<Login/>} />
<Route path="*" element={<PageNotFound/>} />



</Routes>
</BrowserRouter>

</>  )
}