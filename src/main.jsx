import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

// root.render(
//   createElement(
//     "ul",
//     {}, // { style: { color: "red" }, className: "someClass otherClass" },
//     [1, 2, 3, 4, 5, 6].map((item) => createElement("li", {}, item))
//   )
// );

root.render(
  <ul>
    {[1, 2, 3, 4, 5, 6].map((item) => (
      <li>{item}</li>
    ))}

    <button
      onClick={() => {
        console.log("click");
      }}
    >
      click
    </button>
  </ul>
);
