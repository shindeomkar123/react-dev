import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Order from "./components/Order";
import About from "./components/About";
import Contact from "./components/Contact";
import Order from "./components/Order";
// const heading1 = React.createElement("h1", { id: "heading1" }, "Heading 1");
// const heading2 = React.createElement("h1", { id: "heading2" }, "Heading 2");

//! React element which is object
// const header = React.createElement("div", { className: "header" }, [
//   heading1,
//   heading2,
// ]);

// const title = <h1>Namaste React </h1>;
// const Title = () => {
//   return <h1>Namaste React</h1>;
// };

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

//! Root where react app renderes
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
