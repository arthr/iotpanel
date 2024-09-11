// /pages/DevicesList.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDevices } from "../services/api";

interface Device {
  device_id: string;
  deviceName: string;
  location: string;
  model: string;
  installationDate: string;
}

const MonitoringList: React.FC = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadDevices = async () => {
      setLoading(true);
      try {
        const response = await fetchDevices();
        setDevices(response.devices);
      } catch (err) {
        setError("Erro ao carregar os dispositivos. Error: " + err);
      } finally {
        setLoading(false);
      }
    };

    loadDevices();
  }, []);

  const handleDeviceClick = (deviceId: string) => {
    navigate(`/monitoring/${deviceId}`); // Redireciona para a rota de monitoramento
  };

  if (loading) return <p>Carregando dispositivos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Lista de Dispositivos
      </h3>
      {devices.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-300">
          Nenhum dispositivo encontrado.
        </p>
      ) : (
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {devices.map((device) => (
            <li
              key={device.device_id}
              className="p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => handleDeviceClick(device.device_id)}
            >
              <div>
                <strong>{device.deviceName}</strong> - {device.model}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-300">
                {device.location} | Instalado em: {device.installationDate}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MonitoringList;
