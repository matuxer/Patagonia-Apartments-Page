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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route
        path="apartment/:id"
        element={<Apartment />}
        loader={apartmentLoader}
        errorElement={<PageNotFound />}
      />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
