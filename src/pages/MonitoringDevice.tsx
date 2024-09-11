import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { fetchDeviceData } from "../services/api";

// Função para calcular o timestamp de 15 minutos atrás
const getLast15Minutes = () => {
  const currentTime = Date.now();
  const twelveHoursAgo = currentTime - 1/4 * 60 * 60 * 1000; // 15 minutos em milissegundos
  return { start_time: twelveHoursAgo, end_time: currentTime };
};

const MonitoringDevice: React.FC = () => {
  const { deviceId } = useParams<{ deviceId: string }>();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      if (!deviceId) {
        setError("Device ID não encontrado.");
        return;
      }

      setLoading(true);

      try {
        const { start_time, end_time } = getLast15Minutes(); // Define o intervalo dos últimos 15 minutos
        const deviceData = await fetchDeviceData(
          deviceId,
          start_time,
          end_time
        );
        setData(deviceData.deviceData);
      } catch (err) {
        setError("Erro ao carregar os dados do dispositivo. Error: " + err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [deviceId]);

  if (loading) return <p>Carregando dados...</p>;
  if (error) return <p>{error}</p>;

  // Preparando os dados para os gráficos
  const chartData = data.map((item: any) => ({
    timestamp: new Date(item.timestamp).toLocaleTimeString(),
    U0: item.payload.DATA.VABCTRMS, // Tensão Trifásica
    I0:
      item.payload.DATA.IARMS +
      item.payload.DATA.IBRMS +
      item.payload.DATA.ICRMS, // Corrente Trifásica (soma das correntes)
    IN: item.payload.DATA.IN ?? 0, // Corrente de Neutro (se existir)
    P0: item.payload.DATA.PT, // Potência Ativa Trifásica
    Q0: item.payload.DATA.QT, // Potência Reativa Trifásica
    S0: item.payload.DATA.ST, // Potência Aparente Trifásica
    FP0: item.payload.DATA.FPT, // Fator de Potência Trifásico
    EA: item.payload.DATA.KWHT, // Energia Ativa Positiva
    ER: item.payload.DATA.KVARHT, // Energia Reativa Positiva
    TEMP: item.payload.DATA.TEMP, // Temperatura
    IO1: item.payload.DATA.IO1 ?? 0, // Entrada Analógica 1 (se existir)
  }));

  return (
    <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Dados do Dispositivo (Últimos 15 minutos)
      </h3>

      {/* Gráfico de Tensão Trifásica (U0) */}
      <h4 className="text-md font-semibold text-gray-900 dark:text-white">
        Tensão Trifásica (U0)
      </h4>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="U0" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>

      {/* Gráfico de Corrente Trifásica (I0) */}
      <h4 className="text-md font-semibold text-gray-900 dark:text-white">
        Corrente Trifásica (I0)
      </h4>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="I0" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>

      {/* Gráfico de Potência Ativa, Reativa e Aparente */}
      <h4 className="text-md font-semibold text-gray-900 dark:text-white">
        Potência Ativa, Reativa e Aparente (P0, Q0, S0)
      </h4>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="P0" fill="#8884d8" />
          <Bar dataKey="Q0" fill="#82ca9d" />
          <Bar dataKey="S0" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>

      {/* Gráfico de Fator de Potência (FP0) */}
      <h4 className="text-md font-semibold text-gray-900 dark:text-white">
        Fator de Potência Trifásico (FP0)
      </h4>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="FP0" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>

      {/* Gráfico de Energia Ativa e Reativa */}
      <h4 className="text-md font-semibold text-gray-900 dark:text-white">
        Energia Ativa (EA) e Reativa (ER)
      </h4>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="EA" stroke="#8884d8" />
          <Line type="monotone" dataKey="ER" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>

      {/* Gráfico de Temperatura */}
      <h4 className="text-md font-semibold text-gray-900 dark:text-white">
        Temperatura (TEMP)
      </h4>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="TEMP" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonitoringDevice;
