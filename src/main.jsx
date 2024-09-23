import { createRoot } from "react-dom/client";
import { App } from "./components/app/App";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

root.render(<App title='Headphones app' />);
