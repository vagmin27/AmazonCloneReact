import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Context from "./ContextApi/Context";
import CartPage from "./Pages/CartPage";
import Home from "./Pages/Home";
import ProductPaga from "./Pages/ProductPaga";

function App() {
  return (
    <>
    <Context>
      <Header />
        <Routes>
          <Route path="/" index element={<Home />}/>
          <Route path="/CartPage" element={<CartPage />}/>
          <Route path={`/ProductPaga/:id`} element={<ProductPaga />}/>
        </Routes>
      <Footer />
      </Context>
    </>
  );
}

export default App;

CartPage