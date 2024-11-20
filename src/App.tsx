
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/boiolinha",
    element: <div>Boiolinha</div>,
  }
]);

function App() {

  return (
    <main>
      <RouterProvider router={router} />
    </main>

  );
}

export default App;
