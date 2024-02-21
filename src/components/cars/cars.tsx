// AutoList.tsx
import React, { useEffect, useState } from 'react';
import { getAutos } from '../../utils/carsService';

const AutoList: React.FC = () => {
  const [autos, setAutos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAutos(10, 0); // Ejemplo: Límite 10, Offset 0
        setAutos(data);
      } catch (error) {
        // Manejar errores
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Listado de Autos</h1>
      <ul>
        {autos.map((auto: any) => (
          <li key={auto.id}>{auto.modelo}</li>
        ))}
      </ul>
    </div>
  );
};

export default AutoList;
