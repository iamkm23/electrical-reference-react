import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Calculator,
  Download,
  SingleDownload,
  Home,
  Error,
  SharedNavbar,
} from "./pages";

import { Navbar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SharedNavbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="download">
            <Route index element={<Download />} />
            <Route path=":bookId" element={<SingleDownload />} />
          </Route>

          <Route path="/calculator" element={<Calculator />} />
          <Route path="/calculator/:calculatorId" element={<Calculator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="download" element={<Navbar />}>
            <Route index element={<Download />} />
            <Route path=":downloadId" element={<SingleDownload />} />
          </Route>

          <Route path="calculator" element={<Navbar />}>
            <Route index element={<Calculator />} />
            <Route path=":calculatorId" element={<SingleDownload />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Route> */
}
