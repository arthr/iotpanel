import { ChevronRight, Home } from "lucide-react";

function Breadcrumb() {
  return (
    <nav
      aria-label="breadcrumb"
      className="flex items-center justify-between mb-4 mt-2"
    >
      <ol className="flex items-center space-x-2">
        <li>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <Home className="size-4" />
            Dashboard
          </a>
        </li>
        <li>
          <div className="inline-flex items-center gap-1 text-gray-500 dark:text-gray-400">
            <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-300" />
            <a
              href="#"
              className="text-gray-500 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Link
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="inline-flex items-center gap-1 text-gray-500 dark:text-gray-400">
            <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-300" />
            <span>Current Page</span>
          </div>
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
