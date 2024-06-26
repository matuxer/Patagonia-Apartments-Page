import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Contact from "./pages/Contact";
import Apartment, { apartmentLoader } from "./pages/Apartment";
import Footer from "./components/Footer";
import ScrollToTop from "./helper/ScrollToTop";
import PageNotFound from "./pages/PageNotFound";

/* Es creada la estructura principal de las rutas del proyecto */
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />

      {/* El loader es usado para verificar si el id del apartamento dado existe o no, de existir renderiza la página Apartment, caso contrario renderiza la página PageNotFound */}
      <Route
        path="apartment/:id"
        element={<Apartment />}
        loader={apartmentLoader}
        errorElement={<PageNotFound />}
      />

      {/* En caso de que el path no coincide con ninguno de los path anteriores renderiza la página PageNotFound */}
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

/* Se determina la distribución de ciertos componentes. Ej, componente NavBar va a ir arriba de todo y el elemento Footer va abajo de todo, y estan presentes dentro de todas las páginas */
function RootLayout() {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
}

/* Dentro del componente App se renderiza las rutas antes especificadas, mostrando la página Home en el path '/' */
function App() {
  return <RouterProvider router={router} />;
}

export default App;
