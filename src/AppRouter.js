import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Add from "./Add";
import Header from "./Header";
import Edit from "./Edit";
import Error from "./Error";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/create" element={<Add />}></Route>
        <Route path="/update/:id" element={<Edit />}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
