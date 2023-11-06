import { Route, Routes } from "react-router-dom";
import pages from "./utils/pages";
import Layout from "./components/layout/Layout";
import NotFound from "./components/pages/NotFound";

const App = () => {
  return (
    <Layout>
      <Routes>
        {pages.map((page, index) => (
          <Route key={index} path={page.path} element={<page.component />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
