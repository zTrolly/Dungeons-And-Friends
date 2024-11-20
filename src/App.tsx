
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Settings } from "./pages/Settings/Settings";
import { ThemeProvider } from "./components/theme-provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/boiolinha",
    element: <div>Boiolinha</div>,
  },
  {
    path: "/settings",
    element: <Settings />,
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
