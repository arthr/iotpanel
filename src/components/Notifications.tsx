import { Bell, DownloadIcon, Eye, Heart, UserPlus } from "lucide-react";

function Notifications() {
  return (
    <>
      <button
        type="button"
        data-dropdown-toggle="notification-dropdown"
        className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Ver Notificações</span>
        <Bell className="size-6" />
      </button>

      {/*  Dropdown notifications */}
      <div
        className="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700 rounded-xl"
        id="notification-dropdown"
      >
        <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
          Notificações
        </div>
        <div>
          <a
            href="#"
            className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
          >
            <div className="flex-shrink-0">
              <img
                className="w-11 h-11 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                alt="Bonnie Green avatar"
              />
              <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white bg-primary-700 dark:border-gray-700">
                <DownloadIcon className="w-3 h-3 text-white" />
              </div>
            </div>
            <div className="pl-3 w-full">
              <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                Nova mensagem de
                <span className="ml-1 font-semibold text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                : "Boa tarde! Tudo pronto para a aprensetação?"
              </div>
              <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
                alguns segundos atrás
              </div>
            </div>
          </a>
          <a
            href="#"
            className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
          >
            <div className="flex-shrink-0">
              <img
                className="w-11 h-11 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="Jese Leos avatar"
              />
              <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-primary-700 rounded-full border border-white dark:border-gray-700">
                <UserPlus className="w-3 h-3 text-white" />
              </div>
            </div>
            <div className="pl-3 w-full">
              <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white mr-1">
                  Jese leos
                </span>
                e
                <span className="font-medium text-gray-900 dark:text-white mx-1">
                  5 outros
                </span>
                começaram a seguir você.
              </div>
              <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
                10 minutes ago
              </div>
            </div>
          </a>
          <a
            href="#"
            className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
          >
            <div className="flex-shrink-0">
              <img
                className="w-11 h-11 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                alt="Joseph McFall avatar"
              />
              <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-red-600 rounded-full border border-white dark:border-gray-700">
                <Heart fill="white" className="w-3 h-3 text-white" />
              </div>
            </div>
            <div className="pl-3 w-full">
              <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white mr-1">
                  Joseph Mcfall
                </span>
                e
                <span className="font-medium text-gray-900 dark:text-white mx-1">
                  141 outros
                </span>
                amaram sua postagem. Parabéns!
              </div>
              <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
                44 minutos atrás
              </div>
            </div>
          </a>
        </div>
        <a
          href="#"
          className="block py-2 text-sm font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:underline"
        >
          <div className="inline-flex items-center">
            <Eye className="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400" />
            Ver todas
          </div>
        </a>
      </div>
    </>
  );
}

export default Notifications;
