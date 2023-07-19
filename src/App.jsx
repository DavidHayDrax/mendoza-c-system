import AlmacenHco from "./pages/Almacen/AlmacenHco";
import CLApp from "./pages/Checklist/CLApp";
import { useAuth0 } from "@auth0/auth0-react";
import FApp from "./pages/Facturas/FApp";
import {AlmacenProvider} from "./pages/Almacen/AlmacenContext"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AlmacenHco />} />
        <Route
          path="/almacenHco"
          element={
            <AlmacenProvider>
              <AlmacenHco />
            </AlmacenProvider>
          }
        />
        <Route path="/facturas" element={<FApp />} />
        <Route path="/checklist" element={<CLApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
