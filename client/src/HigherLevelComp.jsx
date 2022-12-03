import { useState } from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import LandingPage from "./LandingPage";

function HigherLevelComp() {
  const [walletState, setWalletState] = useState({});

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage setWalletState={setWalletState} />,
    },
    {
      path: "/dashboard",
      element: <Dashboard walletState={walletState} />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default HigherLevelComp;
