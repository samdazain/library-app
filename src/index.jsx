import React from "react";
import { createRoot } from "react-dom/client";
import Library from "./components/Library";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(<Library />);
