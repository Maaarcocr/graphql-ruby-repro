// Entry point for the build script in your package.json
import React from "react"
import {createRoot} from 'react-dom/client';
import {App} from "./app"
const domContainer = document.querySelector('#react-dom');
const root = createRoot(domContainer);


root.render(React.createElement(App));