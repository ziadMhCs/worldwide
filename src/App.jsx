//5 - programmatic navigation  
import { BrowserRouter, Route, Router, Routes,Navigate} from "react-router-dom";
import Product from "./pages/product";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import { useEffect, useState } from "react";
import CountriesList from "./components/CountryList";
import City from "./components/City";
import  Form  from "./components/Form";
const BASE_URL = "http://localhost:9000";
export default function App() {
  const [cities, setCites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function fetchCites() {
        try {
          setIsLoading(true);
          const res = await fetch(`${BASE_URL}/cities`);
          const data = await res.json();
          setCites(data);
        } catch {
          alert("something went wrong with loading data");
        } finally {
          setIsLoading(false);
        }
      }
      fetchCites();
    },
    [setIsLoading]
  );
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="product" element={<Product />} />
          <Route path="/" element={<HomePage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="app" element={<AppLayout />}>
            <Route
              index
              element={<Navigate replace to="cities"/>}
            />
            <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} />
            <Route path="cities/:id" element={<City />} />
            <Route
              path="countries"
              element={<CountriesList cities={cities} isLoading={isLoading} />}
            />
            <Route path="form" element={<Form/>} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
