import { createRoot } from "react-dom/client";
import { App } from "/src/components/App.jsx";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

root.render(<App />);