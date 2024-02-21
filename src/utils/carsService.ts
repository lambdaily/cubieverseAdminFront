import { baseURL } from '../common/baseUrl';
const token = localStorage.getItem('token');

// carService.js
const carUrl = `${baseURL}/car`; 

export const fetchCarById = async (id: string) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${carUrl}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) {
      if (response.status === 401) {
        throw new Error(
          JSON.stringify({ Error: 401, Message: 'No Tiene Permisos!' }),
        );
      } else if (response.status === 404) {
        throw new Error(
          JSON.stringify({
            Error: 404,
            Message: 'No se encontraron resultados',
          }),
        );
      } else {
        throw new Error('Error al obtener los datos del automóvil');
      }
    }
    const carData = await response.json();
    return carData;
  } catch (error) {
    console.error('Error al obtener los datos del automóvil:', error);
    throw error;
  }
};
export const createOrUpdateCar = async (
  method: any,
  id: any,
  brand: string,
  model: string,
) => {
  try {
    const apiUrl = id ? `${carUrl}/${id}` : carUrl;
    const response = await fetch(apiUrl, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ marca: brand, modelo: model }),
    });
    if (!response.ok) {
      throw new Error('Error al enviar el formulario');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al enviar el formulario:', error);
    throw error;
  }
};