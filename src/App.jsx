import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import HomePage from "./pages/Homepage"
import ContactPage from "./pages/ContactPage"
import Products from "./pages/Products"
import Product from "./pages/Product"


//layouts
import DefaultLayout from "./layouts/DefaultLayout"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/contact" Component={ContactPage} />
            <Route path="/products" Component={Products} />
            <Route path="/products/:id" Component={Product} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
