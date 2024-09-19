import { RecoilRoot } from "recoil";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  const browserRouter = createBrowserRouter(router);

  return (
    <RecoilRoot>
      <RouterProvider router={browserRouter} />
    </RecoilRoot>
  );
}

export default App;
