//! Root where react app renderes
const root = ReactDOM.createRoot(document.getElementById("root"));

const heading1 = React.createElement("h1", { id: "heading1" }, "Heading 1");
const heading2 = React.createElement("h1", { id: "heading2" }, "Heading 2");

//! React element which is object
const header = React.createElement("div", { className: "header" }, [
  heading1,
  heading2,
]);

root.render(header);
