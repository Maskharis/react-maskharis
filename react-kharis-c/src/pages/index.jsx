import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

import Layout from "../components/layout";
import { Button } from "../components/button";
import Hero from "../components/hero";
import Newsletter from "../components/newsletter";
import { Input, TextArea } from "../components/input"; // named import
// import Input from "../components/input"; import default

export default function Index() {
  return (
    <Layout>
      <Hero />
      <Newsletter />
    </Layout>
  );
}
