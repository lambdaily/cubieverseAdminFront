import React from 'react';
import ReactPaginate from 'react-paginate';
import { PaginationProps } from '../interfaces/pagination.interface';
import { ListTableData } from '../../../../utils/apiService';
import { useSelector } from 'react-redux';

const Pagination: React.FC<PaginationProps> = ({
  setData,
  setPages,
  pages,
  setPageEvent,
  name,
}) => {
  const column: string = useSelector((state: any) => state.pagination.column);
  const order: string = useSelector((state: any) => state.pagination.order);
  const limit: number = useSelector((state: any) => state.pagination.limit);

  const changePageClick = async (event: any) => {
    const { data, metadata } = await ListTableData(
      name,
      limit,
      order,
      column,
      event.selected,
      'GET',
      {},
    );

    setData(data);
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
  );
};

export default Pagination;
