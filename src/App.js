import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./utils/store";
import Router from "./utils/router";

import Navbar from "./components/common/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <div className="container mt-4">
                <Navbar />
                <Router />
            </div>
        </BrowserRouter>
    </Provider>
);

export default App;
