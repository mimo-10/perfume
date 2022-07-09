import React from "react";
import "./app.css";
import { Header, Footer, Main } from "./components";

const App = () => {
  return (
    <main className="app">
        <Header />
        <Main />
        <Footer />
    </main>
  )
}

export default App;