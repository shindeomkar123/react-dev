import React from "react";
import ReactDOM from "react-dom/client";

// const heading1 = React.createElement("h1", { id: "heading1" }, "Heading 1");
// const heading2 = React.createElement("h1", { id: "heading2" }, "Heading 2");

//! React element which is object
// const header = React.createElement("div", { className: "header" }, [
//   heading1,
//   heading2,
// ]);

const title = <h1>Namaste React </h1>;
const Title = () => {
  return <h1>Namaste React</h1>;
};

// Functional component which returns JSX
const Header = () => {
  return (
    <div>
      <Title />
      <h1>Heading 1</h1>
      <h1>Heading 2</h1>
    </div>
  );
};

//! Root where react app renderes
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
