import { useState, useEffect } from "react";
import Table from './content/Table';
import Pagination from './content/Pagination';
import { ICar } from "../../../common/interfaces/entities/car.interface";
import { NavLink } from "react-router-dom";

const baseURL = 'http://localhost:8000/api';
const tokenLocal = localStorage.getItem('token');


const TableFive = () => {
  const [cars, setCars] = useState<ICar[]>([]);
  const [pageEvent, setPageEvent] = useState<number>(1);
  const [orderBy, setOrderBy] = useState<string>('id');

  const [toggleFilterId, setToggleFilterId] = useState<boolean>(false); // false = down = ASC
  const [toggleFilterMarca, setToggleFilterMarca] = useState<boolean>(false); // false = down = ASC
  const [toggleFilterModelo, setToggleFilterModelo] = useState<boolean>(false); // false = down = ASC

  const [pages, setPages] = useState<number>(0);
  const [selectedCarId, setSelectedCarId] = useState<string | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let limit = 10;
        let order = 'ASC';
        let column = orderBy;
        let page = pageEvent - 1; // Page number should start from 0 for the API
        const response = await fetch(`${baseURL}/cars?limit=${limit}&order=${order}&column=${column}&page=${page}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${tokenLocal}`,
          },
        });
        const { data, metadata } = await response.json();

        // agregar validacion del response antes de setear variables
        setCars(data.cars);
        setPages(metadata.pages);
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    };

    fetchData();
  }, [pageEvent, orderBy]);

  const handleDeleteConfirm = async () => {
    console.log(`Deleting department with ID: ${selectedCarId}`);
    try {
      const response = await fetch(`${baseURL}/cars/${selectedCarId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokenLocal}`,
        },
      });

      if (response.ok) {
        console.log(`Car with ID ${selectedCarId} deleted successfully`);
        setCars(prevCars => prevCars.filter(car => car.id !== selectedCarId));
      } else {
        console.error(`Failed to delete department with ID ${selectedCarId}`);
        console.log(`${tokenLocal}`);
      }
    } catch (error) {
      console.error('Error during department deletion:', error);
    }
    setShowDeleteModal(false);
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-10 rounded-md">
              <p>Are you sure you want to delete this Car?</p>
              <div className="flex justify-end mt-4">
                <button className="text-black bg-white border border-stroke hover:bg-red-800 focus:ring-4  focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2" onClick={handleDeleteCancel} >
                  Cancel
                </button>
                <button className="text-white bg-[#D71E50]  hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2" onClick={handleDeleteConfirm} >Delete</button>
              </div>
            </div>
          </div>
        )}

        <NavLink to={`/cars/new`}>
          <button className="inline-flex items-center justify-center rounded-md border border-primary py-4 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10">
            Create
          </button>
        </NavLink>

        <Table
          baseURL={baseURL}
          setOrderBy={setOrderBy}
          setCars={setCars}
          setPages={setPages}
          setToggleFilterId={setToggleFilterId}
          setToggleFilterMarca={setToggleFilterMarca}
          setToggleFilterModelo={setToggleFilterModelo}
          toggleFilterId={toggleFilterId}
          toggleFilterMarca={toggleFilterMarca}
          toggleFilterModelo={toggleFilterModelo}
          pageEvent={pageEvent}
          cars={cars}
          setShowDeleteModal={setShowDeleteModal}
          selectedCarId={selectedCarId}
          showDeleteModal={showDeleteModal}
          setSelectedCarId={setSelectedCarId}
        />
        <Pagination
          baseURL={baseURL}
          setCars={setCars}
          pages={pages}
          setPages={setPages}
          setPageEvent={setPageEvent}
        />
      </div>
    </div>
  );
};

export default TableFive;
