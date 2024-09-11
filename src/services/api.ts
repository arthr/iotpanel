import axios from "axios";

// Defina a URL base para o seu backend
const API_BASE_URL =
  "https://gune1g5oyf.execute-api.us-east-1.amazonaws.com/Prod";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Função para listar dispositivos
export const fetchDevices = async () => {
  try {
    const response = await api.get("/devices");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dispositivos", error);
    throw error;
  }
};

// Função para obter dados do dispositivo por ID
export const fetchDeviceData = async (
  deviceId: string,
  startTime?: number,
  endTime?: number
) => {
  try {
    const response = await api.get(`/devices/${deviceId}/data`, {
      params: {
        start_time: startTime,
        end_time: endTime,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar dados do dispositivo ${deviceId}`, error);
    throw error;
  }
};
