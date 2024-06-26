import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ScrollToTop es un componente helper que permite que cada página haga scroll hacia arriba cada vez que es renderizada
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}
