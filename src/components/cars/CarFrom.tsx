import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createOrUpdateCar, fetchCarById } from '../../utils/carsService';
import ErrorMessage from '../table/mainTable/content/Message';
interface CarFormProps {
  isUpdateForm: boolean;
}
function CarForm({ isUpdateForm }: CarFormProps) {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [id, setId] = useState('');
  const [isEditing, setIsEditing] = useState(false); // Inicializamos en false
  const [create, setCreate] = useState(Boolean);
  const { id: routeId } = useParams<{ id: string }>();
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  useEffect(() => {
    if (isUpdateForm && routeId) {
      const fetchCarData = async () => {
        try {
          const carData = await fetchCarById(routeId);
          setBrand(carData.marca);
          setModel(carData.modelo);
          setId(carData.id);
        } catch (error) {
          console.log(error);
          // Manejo específico para error 401
          if (error instanceof Error && error.message.includes('401')) {
            setError('No tiene permisos para acceder a este recurso.');
          } else {
            setError('Error al obtener los datos del automóvil!');
          }
          setSuccessMessage(null);
        }
      };
      fetchCarData();
    }
    if (isUpdateForm && isEditing) {
      setCreate(true);
    }
  }, [isUpdateForm, routeId, isEditing]);
  const handleCarFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validar si los campos están vacíos
    if (!brand || !model) {
      console.error(
        'Por favor, completa todos los campos antes de enviar el formulario',
      );
      setError('Completa todos los campos!');
      setSuccessMessage(null);
      return;
    }
    try {
      const method = isUpdateForm ? 'PATCH' : 'POST';
      const data = await createOrUpdateCar(method, id, brand, model);
      setSuccessMessage('Update Succesfully!');
      setError(null);
      console.log('Respuesta del servidor carlos:', data);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setError('Please Updating!');
      setSuccessMessage(null);
    }
  };
  const clearMessage = () => {
    setError(null);
    setSuccessMessage(null);
  };
  return (
    <div>
      <ErrorMessage message={error} type="error" clearMessage={clearMessage} />
      <ErrorMessage
        message={successMessage}
        type="success"
        clearMessage={clearMessage}
      />
      {isUpdateForm ? (
        <form onSubmit={handleCarFormSubmit} action="#">
          <div className="p-6.5">
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  ID
                </label>
                <input
                  disabled
                  value={id}
                  type="text"
                  placeholder="Enter the Car model"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Car Brand
                </label>
                <input
                  onChange={(e) => setBrand(e.target.value)}
                  type="text"
                  value={brand}
                  placeholder="Enter the Car Brand"
                  className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary ${
                    isEditing
                      ? ''
                      : 'disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                  }`}
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Car Model
              </label>
              <input
                onChange={(e) => setModel(e.target.value)}
                type="text"
                value={model}
                placeholder="Enter the Car model"
                className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary ${
                  create
                    ? ''
                    : 'disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                }`}
                disabled={!create}
              />
            </div>
            {!isEditing && (
              <button
                className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray mb-4"
                type="button"
                onClick={() => setIsEditing(true)} // Al hacer clic, habilita la edición
              >
                Enable Editing
              </button>
            )}
            {isEditing && (
              <button
                className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
                type="submit"
              >
                Update
              </button>
            )}
          </div>
        </form>
      ) : (
        <form onSubmit={handleCarFormSubmit} action="#">
          <div className="p-6.5">
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full ">
                <label className="mb-2.5 block text-black dark:text-white">
                  Car Brand
                </label>
                <input
                  onChange={(e) => setBrand(e.target.value)}
                  type="text"
                  value={brand}
                  placeholder="Enter the Car Brand"
                  className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary
                }`}
                />
              </div>
            </div>
            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Car Model
              </label>
              <input
                onChange={(e) => setModel(e.target.value)}
                type="text"
                value={model}
                placeholder="Enter the Car model"
                className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary`}
              />
            </div>
            <button
              className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
export default CarForm;
