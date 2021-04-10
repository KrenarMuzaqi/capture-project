import React from "react";

//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import Sections
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import OurWrok from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";

import { Switch, Route, useLocation } from "react-router-dom";

//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  //useLocation tells the Farmer Motion when we leave the page, to execute "exit" property
  //which we have on "animation.js"
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      {/*AnimatePresence allows components to animate out when they're removed from the React tree. 
      "ExitBeforeEnter" means don't start executing animation in coming page until current page isn't closed*/}
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWrok />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
