import React from "react";
import ReactDOM from "react-dom/client";
import { IndexStyled } from "./index.styled";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <IndexStyled>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </IndexStyled>
    </React.StrictMode>
);
