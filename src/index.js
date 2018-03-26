import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from './App';

const wrapper = document.getElementById("root");
wrapper ? render(<App />, wrapper) : false;