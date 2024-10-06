import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./pages/Home.jsx";
import  Single  from "./pages/Single.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/users/:userId",
    element: <Single />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
