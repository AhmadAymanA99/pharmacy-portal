import React from "react";
import { Route, Routes } from "react-router-dom";
import Medication from "../pages/Medication";
import Dashboard from "../pages/Dashboard";

function Router() {
    return (
        <Routes>
            <Route path="/medications" element={<Medication />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
}

export default Router;
