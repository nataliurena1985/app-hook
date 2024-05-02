import React from "react";
import ReactDOM from "react-dom";
import { Memorize } from "./components/06-memos/Memorize";
//import { Layout } from "./components/05-useLayoutEffect/Layout";
//import { RealExampleRef } from "./components/04-useRef/RealExampleRef";
//import { FocusScreen } from "./components/04-useRef/FocusScreen";
//import { SimpleForm } from "./components/02-useEffect/SimpleForm";
//import { FormWithCustomHook } from "./components/02-useEffect/FormWithCustomHook";
//import { MultipleCustomHooks } from "./components/03-examples/MultipleCustomHooks";
//import { CounterWithCustomHook } from "./components/01-useState/CounterWithCustomHook";
//import { CounterApp } from "./components/01-useState/CounterApp";



const divRoot = document.querySelector("#root");

ReactDOM.render(<Memorize />, divRoot);
