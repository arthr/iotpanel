import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { loadDevices, Device } from "../store/devicesSlice";

function Dashboard() {
  const dispatch: AppDispatch = useDispatch();
  
  // Selecionando os dispositivos e estados de carregamento/erro
  const devices: Device[] = useSelector((state: RootState) => state.devices.devices);
  const loading = useSelector((state: RootState) => state.devices.loading);
  const error = useSelector((state: RootState) => state.devices.error);

  useEffect(() => {
    dispatch(loadDevices()); // Carrega os dispositivos ao montar o componente
  }, [dispatch]);

  return (
    <div className="flex flex-col flex-1 space-y-4 mb-4">
      <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Bem vindo de volta, Arthur Morais!
        </h2>
        <p className="text-gray-500 dark:text-gray-300">
          Aqui estão algumas informações sobre o seu painel de controle.
        </p>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Dispositivos
        </h3>

        {loading ? (
          <p className="text-gray-500 dark:text-gray-300">
            Carregando dispositivos...
          </p>
        ) : error ? (
          <p className="text-red-500">Erro ao carregar dispositivos: {error}</p>
        ) : (
          <ul className="text-gray-700 dark:text-gray-300">
            {devices.map((device) => (
              <li key={device.device_id} className="p-2">
                <strong>{device.deviceName}</strong> - {device.location} - {device.model}
                <br />
                Instalado em: {device.installationDate}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dashboard;