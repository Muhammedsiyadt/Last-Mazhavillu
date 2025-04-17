import React, { useState } from "react";
import "./App.css";

import Router from "./routes";
import Header from "./views/Nav/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <React.Suspense>
        <Router />
      </React.Suspense>
      <Footer />
    </>

  );
}

export default App;
