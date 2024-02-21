import React from 'react';
import ReactPaginate from 'react-paginate';
import { PaginationProps } from '../../../../common/interfaces/props/tablefive/pagination.interface';

const Pagination: React.FC<PaginationProps>  = ({
  baseURL,
  setCars,
  setPages,
  pages,
  setPageEvent
}) => {
  const changePageClick = async (event: any) => {
    let limit = 10;
    let order = 'ASC';
    let column ='id';
    const tokenLocal = localStorage.getItem('token');

    const response = await fetch(`${baseURL}/cars?limit=${limit}&order=${order}&column=${column}&page=${event.selected}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenLocal}`,
      },
    });
    const { data, metadata } = await response.json();

    setCars(data.cars);
    setPages(metadata.pages);
    setPageEvent(event.selected + 1);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={changePageClick}
        pageRangeDisplayed={5}
        pageCount={pages}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className="flex m-2 p-2 select-none"
        activeClassName="bg-gray-800 text-sky-900"
        activeLinkClassName="bg-gray-800 text-sky-900"
        pageClassName="m-2 cursor-pointer"
        previousClassName="m-2"
        nextClassName="m-2"
      />
    </div>
  )
}

export default Pagination;
