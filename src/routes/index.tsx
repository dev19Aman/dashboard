import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Dashboard from "../views/Dashboard";

export default function AllRoutes() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/"  element={<Dashboard/>} />
          <Route>404 not found</Route>
        </Routes>
      </Layout>
    </>
  );
}
