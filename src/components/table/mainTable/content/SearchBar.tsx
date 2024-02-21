import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';

const SearchBar = (props: {
  onSearch: (arg0: {
    id: string | undefined;
    marca: string | undefined;
    modelo: string | undefined;
  }) => void;
  /* setShowToast: (val: boolean) => void;
  showToast: boolean; */
}) => {
  const idRef = useRef<HTMLInputElement>(null);
  const marcaRef = useRef<HTMLInputElement>(null);
  const modeloRef = useRef<HTMLInputElement>(null);

  const constructJSON = () => {
    const id = idRef.current?.value;
    const marca = marcaRef.current?.value;
    const modelo = modeloRef.current?.value;
    return {
      id,
      marca,
      modelo,
    };
  };

  const handleSearch = () => {
    const jsonData = constructJSON();
    props.onSearch(jsonData);
  };

  return (
    <div className="flex items-center">
      <input
        type="Number"
        placeholder="ID"
        ref={idRef}
        className="border rounded-md p-2 mr-2"
      />
      <input
        type="text"
        placeholder="Marca"
        ref={marcaRef}
        className="border rounded-md p-2 mr-2"
      />
      <input
        type="text"
        placeholder="Modelo"
        ref={modeloRef}
        className="border rounded-md p-2 mr-2"
      />
      <button
        onClick={handleSearch}
        className="bg-black text-white font-bold py-2 px-4 rounded mr-2"
      >
        Buscar
      </button>

      <NavLink to={`/tables/car/create/new`}>
        <button className="bg-black text-white font-bold py-2 px-4 rounded">
          Create
        </button>
      </NavLink>
    </div>
  );
};

export default SearchBar;
