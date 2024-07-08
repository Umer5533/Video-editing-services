import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Ourwork from "./Components/OurWork/ourwork.jsx";
import Services from "./Components/Services/services.jsx";
import Ourclients from "./Components/Ourclients/Ourclients.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Home from "./Components/Home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "Ourwork",
        element: <Ourwork />,
      },
      {
        path: "Services",
        element: <Services />,
      },
      {
        path: "Ourclients",
        element: <Ourclients />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
