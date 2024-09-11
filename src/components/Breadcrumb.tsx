import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const routeNameMap: { [key: string]: string } = {
  "/": "Dashboard",
  "/monitoring": "Monitoramento",
  "/monitoring/:deviceId": "Dispositivo",
  "/mock-grids": "Mock Grids",
};

function Breadcrumb() {
  const location = useLocation();

  // Divide a URL em segmentos
  const pathSegments = location.pathname.split("/").filter(Boolean);

  // Constrói os breadcrumbs dinamicamente com base nos segmentos
  const breadcrumbs = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const routeName = routeNameMap[path] || segment;

    return (
      <li key={path} className="flex items-center">
        {index > 0 && (
          <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-300" />
        )}
        {index === pathSegments.length - 1 ? (
          <span className="text-gray-500 dark:text-gray-400">{routeName}</span>
        ) : (
          <Link
            to={path}
            className="text-gray-500 dark:text-gray-400 dark:hover:text-gray-300"
          >
            {routeName}
          </Link>
        )}
      </li>
    );
  });

  return (
    <nav
      aria-label="breadcrumb"
      className="flex items-center justify-between mb-4 mt-2"
    >
      <ol className="flex items-center space-x-2">
        <li className="flex items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <Home className="size-4" />
            Dashboard
          </Link>
        </li>
        {breadcrumbs.length > 0 && (
          <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-300" />
        )}
        {breadcrumbs}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
