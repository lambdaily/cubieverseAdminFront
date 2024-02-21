import React, { useEffect, useState } from 'react';
import errorIcon from '../../../../images/icon/error-svgrepo-com.svg';
import successIcon from '../../../../images/icon/success-filled-svgrepo-com.svg';
import exitIcon from '../../../../images/icon/exit.svg';
interface Props {
  message: string | null;
  type: 'error' | 'success';
  clearMessage: () => void; // Función para limpiar el mensaje,
  showToast: boolean;
  setShowToast: (val: boolean) => void;
}

const ErrorMessage: React.FC<Props> = ({
  message,
  type,
  clearMessage,
  showToast,
  setShowToast
}) => {
  useEffect(() => {
    console.log('showToast', showToast);
    let timer: ReturnType<typeof setTimeout>;
    if (message) {
      timer = setTimeout(() => {
        setShowToast(!showToast);
        // Limpiar el mensaje de error después de 10 segundos
        // clearMessage(); // Llama a la función clearMessage para limpiar el mensaje
      }, 100000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [message, clearMessage]);

  const getBackgroundColor = () => {
    return type === 'success' ? '#0FA61E' : '#E80008';
  };

  const handleCloseClick = () => {
    clearMessage(); // Llama a la función clearMessage para limpiar el mensaje al hacer clic en el botón Close
  };

  return (
    <div
      id="toast-success"
      className={`absolute z-2 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center p-4 text-gray-500 bg-white rounded-lg shadow-lg`}
      style={{
        backgroundColor: getBackgroundColor(),
        top: showToast ? '2px' : '-80px', // Adjust the initial and final top positions
        transition: 'top 0.2s ease-in-out', // Adjust the transition properties as needed
      }}
    >
      <div
        className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 bg-${type === 'success' ? 'green' : 'red'}-100 rounded-lg`}
      >
        {/* Usa el icono importado en lugar del svg */}
        <img
          src={`${type === 'success' ? successIcon : errorIcon}`}
          alt="Error Icon"
          className="w-5 h-5"
        />
        <span className="sr-only">
          {type === 'success' ? 'Check' : 'Error'} icon
        </span>
      </div>
      <div className="ml-3 text-sm font-bold text-white p-2.5">{message}</div>
      <button
        type="button"
        onClick={handleCloseClick} // Agrega el manejador de evento al hacer clic en el botón Close
        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        {/* Usa el icono importado en lugar del svg */}
        <img src={exitIcon} alt="Error Icon" className="w-5 h-5" />
      </button>
    </div>
  )
};
export default ErrorMessage;
