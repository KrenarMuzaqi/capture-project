import React from "react";

//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import Sections
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import OurWrok from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />

      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWrok />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
