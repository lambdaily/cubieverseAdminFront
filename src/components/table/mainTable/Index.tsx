import React, { useState, useEffect, createContext } from 'react';
import Table from './content/Table';
import Pagination from './content/Pagination';
import { ListTableData } from '../../../utils/apiService';
import { ITableContext } from './interfaces/tableContext.interface';
import { ITablePayload } from './interfaces/tablePayload.interface';
import { baseURL } from '../../../common/baseUrl';
import SearchBar from './content/SearchBar';
import ErrorMessage from './content/Message';

export const TableContext = createContext<ITableContext | undefined>(undefined);
interface MainTableProps {
  name: string | '';
}

const MainTable = (props: MainTableProps) => {
  const { name } = props;
  const [orderBy, setOrderBy] = useState<string>('id');
  const [pages, setPages] = useState<number>(0);
  const [pageEvent, setPageEvent] = useState<number>(1);
  const [data, setData] = useState<any[]>([]);
  const [headerData, setHeaderData] = useState<ITablePayload[]>([]);
  const [toggleOrderColumn0, setToggleOrderColumn0] = useState<boolean>(false);
  const [toggleOrderColumn1, setToggleOrderColumn1] = useState<boolean>(false);
  const [toggleOrderColumn2, setToggleOrderColumn2] = useState<boolean>(false);
  const [toggleOrderColumn3, setToggleOrderColumn3] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [searchData, setSearchData] = useState<any>({});
  const [error, setError] = useState<string>('No se encontraron resultados.');
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    fetchData(searchData);
    
    if (!searchData) {
      // Si no hay datos de búsqueda, restablecer los mensajes
      // setError(null);
      // setSuccessMessage(null);
      
    }
  }, [searchData]);

  const fetchData = async (jsonData: any) => {
    console.log('fetch buscar')
    try {
      let limit = 10;
      let order = 'ASC';
      let column = orderBy;
      let page = 0;

      const { data, metadata, payload } = await ListTableData(
        name,
        limit,
        order,
        column,
        page,
        jsonData,
      );

      setData(data);
      setPages(metadata.pages);
      setHeaderData(payload);
      
      // Verificar si no hay resultados y ajustar los mensajes en consecuencia
      if (!data.length) {
        setError('No se encontraron resultados.');
        // setShowToast(false);
        // setSuccessMessage(null);
        setShowToast(true);
      } else {
        // setError(null);
        // setSuccessMessage('Se encontraron resultados.');
        setShowToast(false);
      }

      
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('No se encontraron resultados.');
      setSuccessMessage(null);

    }
  };

  const handleDeleteConfirm = async () => {
    console.log(`Deleting department with ID: ${selectedItemId}`);
    const token = localStorage.getItem('token');
    try {
      //TODO llevar a api service
      const responseDelete = await fetch(
        `${baseURL}/${name}/${selectedItemId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!responseDelete.ok) {
        console.log(`Item with ID ${selectedItemId} deleted successfully`);
        alert(`Failed to delete department with ID ${selectedItemId}`);
        throw new Error(
          `Failed to delete department with ID ${selectedItemId}`,
        );
      }

      let limit = 10;
      let order = 'ASC';
      let column = orderBy;
      let page = 0;

      const { data, metadata, payload } = await ListTableData(
        name,
        limit,
        order,
        column,
        page,
        {},
      );

      setData(data);
      setPages(metadata.pages);
      setHeaderData(payload);
    } catch (error) {
      console.error('Error during department deletion:', error);
    }
    setShowDeleteModal(false);
  };

  const handleSearch = async (jsonData: any) => {
    console.log('Datos de búsqueda:', jsonData);
    setSearchData(jsonData); // Actualizar el estado con los datos de búsqueda
    // setShowToast(!showToast);
  };

  const clearMessage = () => {
    // setError(null);
    // setSuccessMessage(null);
    setShowToast(!showToast);

  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <SearchBar
        onSearch={handleSearch}
        /* setShowToast={setShowToast}
        showToast={showToast} */
      />
      {/* Resto del código */}
      <ErrorMessage
        message={error}
        type="error"
        clearMessage={clearMessage}
        showToast={showToast}
        setShowToast={setShowToast}
      />
      {/* <ErrorMessage
        message={successMessage}
        type="success"
        clearMessage={clearMessage}
      /> */}

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-10 rounded-md">
            <p>Are you sure you want to delete this Car?</p>
            <div className="flex justify-end mt-4">
              <button
                className="text-black bg-white border border-stroke hover:bg-red-800 focus:ring-4  focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
                onClick={() => setShowDeleteModal(!showDeleteModal)}
              >
                Cancel
              </button>
              <button
                className="text-white bg-[#D71E50]  hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
                onClick={handleDeleteConfirm}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      <TableContext.Provider
        value={{
          setOrderBy,
          setPages,
          setHeaderData,
          setData,
          setShowDeleteModal,
          setToggleOrderColumn0,
          setToggleOrderColumn1,
          setToggleOrderColumn2,
          setToggleOrderColumn3,
          showDeleteModal,
          toggleOrderColumn0,
          toggleOrderColumn1,
          toggleOrderColumn2,
          toggleOrderColumn3,
          pageEvent,
          headerData,
        }}
      >
        <Table
          data={data}
          name={name}
          setShowDeleteModal={setShowDeleteModal}
          showDeleteModal={showDeleteModal}
          setSelectedItemId={setSelectedItemId}
          setData={function (value: React.SetStateAction<any[]>): void {
            throw new Error('Function not implemented.');
          }}
        />
      </TableContext.Provider>
      <Pagination
        setData={setData}
        pages={pages}
        setPages={setPages}
        setPageEvent={setPageEvent}
        name={name}
      />
    </div>
  );
};

export default MainTable;
