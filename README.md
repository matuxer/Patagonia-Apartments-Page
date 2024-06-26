# Proyecto página Patagonia Apartments

Este proyecto es para un trabajo escolar, no tengo intenciones alguna de comercializarlo.

## Pasos para ejecutar este proyecto en tu computadora

- Primero clonar este proyecto.
- Instalar todas las dependencias necesarias usando **npm install --force**.
- Usar el script **npm start** para iniciar la app.
- Abrir [http://localhost:3000](http://localhost:3000) para ver el proyecto en tu navegador.

## Deploy

El proyecto se encuentra actualmente hosteado en [Vercel.com](https://vercel.com) usando el dominio [https://papartments.vercel.app](https://papartments.vercel.app).

## Este proyecto utiliza

- HTML
- CSS / Modulos de CSS
- JavaScript
- React
- React-router-dom
- React-responsive-carousel
- Tailwind

## Cómo se estructura este proyecto?

- El proyecto inicia en el archivo [index.html](public/index.html), donde se encuentra un div con el id **'root'** donde se renderizara el resto de la app.
```html
  <body>
    <div id="root"></div>
  </body>
```
- En el archivo [index.js](src/index.js) se crea la raíz de la app y se vincula con el elemento **'root'**.
```javascript
  const root = ReactDOM.createRoot(document.getElementById('root'));
```
- En el mismo archivo también se renderiza el componente **\<App />** dentro del elemento **'root'**.
```javascript
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
```
- El componente <App /> es creado y exportado en el archivo [App.js](src/App.js), en este se declaran las rutas que va a usar el proyecto.
```javascript
  function App() {
    return <RouterProvider router={router} />;
  }
```
- Cada **\<Route />** indica que elemento se renderizara y en que ruta lo hará. 
```javascript
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
```
- Cada página se extiende con el uso de distintos componentes reutilizables, por ejemplo,
  la página **[\<Home />](src/pages/Home.jsx)** hace uso del componente **[\<Cards />](src/components/Cards.jsx)** que tambien es utilizado en la página **[\<Apartment />](src/pages/Apartment.jsx)**

