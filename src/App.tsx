import { useState } from "react";
import SiderbarMenu from "./components/SidebarMenu";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <SiderbarMenu />
  );
}

export default App;
