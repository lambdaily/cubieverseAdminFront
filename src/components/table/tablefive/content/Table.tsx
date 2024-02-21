import React from 'react';
import Content from './Content';
import Header from './Header';
import { TableFiveHeaderProps } from '../../../../common/interfaces/props/tablefive/table-five.header.interface';

const Table: React.FC<TableFiveHeaderProps> = ({
  baseURL,
  setOrderBy,
  setCars,
  setPages,
  setToggleFilterId,
  setToggleFilterMarca,
  setToggleFilterModelo,
  toggleFilterId,
  toggleFilterMarca,
  toggleFilterModelo,
  setShowDeleteModal,
  showDeleteModal,
  pageEvent,
  cars,
  setSelectedCarId,
  selectedCarId
}) => {


  return (
    <table className="w-full table-auto">
      <Header
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
        setSelectedCarId={setSelectedCarId}
        showDeleteModal={showDeleteModal}
        selectedCarId={selectedCarId}
      />
      <Content 
        cars={cars}
        setShowDeleteModal={setShowDeleteModal}
        setSelectedCarId={setSelectedCarId}
        showDeleteModal={showDeleteModal}
        selectedCarId={selectedCarId}
      />
    </table>
  )
}

export default Table;
