// node imports
import {
  RouterProvider,
} from "react-router-dom";
import router from './routs'

import './App.css'
// context imports
import { ProductsProvider } from "./context/ProductsContext";

function App() {


  return (
    <ProductsProvider>
      <RouterProvider router={router} />
    </ProductsProvider>
  );
}

export default App;
