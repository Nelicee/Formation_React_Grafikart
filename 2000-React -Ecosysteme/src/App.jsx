import {
  createBrowserRouter,
  RouterProvider,
  NavLink,
  Outlet,
  useRouteError,
  useNavigation,
  defer,
} from "react-router-dom";
import { Single } from "./pages/Single";
import { Blog } from "./pages/Blog";
import { Spinner } from "./components/Spinner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageError />,
    children: [
      {
        path: "blog",
        element: (
          <div className="row">
            <aside className="col-3">
              <h2>Sidebar</h2>
            </aside>
            <main className="col-9">
              <Outlet />
            </main>
          </div>
        ),
        children: [
          {
            path: "",
            element: <Blog />,
            loader: () => {
              const posts = fetch(
                "https://jsonplaceholder.typicode.com/posts?_limit=10"
              ).then((r) => r.json());
              return defer({ posts });
            },
          },
          {
            path: "id",
            element: <Single />,
          },
        ],
      },
      {
        path: "contact",
        element: <div>Contact</div>,
      },
    ],
  },
]);

function Root() {
  const { state } = useNavigation();
  return (
    <>
      <header>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </header>
      <div className="container my-4">
        {state === "loading" && <Spinner />}
        <Outlet />
      </div>
    </>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

function PageError() {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <h1>Une erreur est survenue</h1>
      <p>{error?.error?.toString() ?? error?.toString()}</p>
    </>
  );
}

export default App;
