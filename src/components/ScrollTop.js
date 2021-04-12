import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//when we are on bottom of "Our Work" page and then we click on nav to "About Us" we are direct to FAQ Section
//and not on Top of "About Us" page
const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]); //execute this everytime when pathname(link) change

  return null;
};

export default ScrollTop;
