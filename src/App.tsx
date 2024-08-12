import Navbar from "./components/Navbar";
import Siderbar from "./components/Sidebar";
import Breadcrumb from "./components/Breadcrumb";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes"
import "./App.css";

function App() {
  const routing = useRoutes(routes)
  return (
    <div className="h-full antialiased">
      <Navbar />

      <Siderbar />

      <main className="p-4 md:ml-64 pt-20">
        <Breadcrumb />
        {routing}
      </main>
    </div>
  );
}

export default App;
