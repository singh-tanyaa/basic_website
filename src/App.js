import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Layout from "./Layout";
import Layout from "./components/Layout";
import ContactUs from "./pages/ContactUs";
import Product from "./pages/Product";
import Service from "./pages/Service";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Layout>
    </Router>
  );
};

const Home = () => <h2>Home Page</h2>;

export default App;
