import React from 'react';
import { columnUser } from '../../../../common/enums/columnUser.enum';
import { orderUser } from '../../../../common/enums/orderUser.enum';
import { TableThreeHeaderProps } from '../../../../common/interfaces/props/tableThree/table-three.header.interface';
import { orderCar } from '../../../../common/enums/orderCar.enum';
import { columnCar } from '../../../../common/enums/columnCar.enum';
import { TableFiveHeaderProps } from '../../../../common/interfaces/props/tablefive/table-five.header.interface';

const Header: React.FC<TableFiveHeaderProps> = ({
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
  pageEvent,
  setSelectedCarId,
}) => {
  const handleToggleFilter = async (column: columnCar): Promise<void> => {
    let limit = 10;
    let order = orderCar.asc;

    let columna: string = '';
    switch (column) {
      case 'id':
        setToggleFilterId(!toggleFilterId);
        setToggleFilterMarca(false);
        setToggleFilterModelo(false);
        columna = columnCar.id;
        !toggleFilterId ? (order = orderCar.desc) : (order = orderCar.asc);
        break;

      case 'marca':
        setToggleFilterId(false);
        setToggleFilterMarca(!toggleFilterMarca);
        setToggleFilterModelo(false);
        !toggleFilterMarca
          ? (columna = columnCar.id)
          : (columna = columnCar.marca);
        !toggleFilterModelo ? (order = orderCar.desc) : (order = orderCar.asc);
        break;

      case 'modelo':
        setToggleFilterId(false);
        setToggleFilterMarca(false);
        setToggleFilterModelo(!toggleFilterModelo);
        !toggleFilterMarca
          ? (columna = columnCar.id)
          : (columna = columnCar.modelo);
        !toggleFilterModelo ? (order = orderCar.desc) : (order = orderCar.asc);
        break;

      default:
        break;
    }

    const response = await fetch(
      `${baseURL}/cars?limit=${limit}&order=${order}&column=${columna}&page=${pageEvent - 1}`,
    );
    const { data, metadata } = await response.json();

    setOrderBy(column);
    setCars(data.cars);
    setPages(metadata.pages);
  };

  return (
    <thead className="select-none">
      <tr className="bg-gray-2 text-left dark:bg-meta-4">
        <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
          <div className="flex">
            <div className="cursor-default">id</div>
            <div
              className="ml-2 relative top-1 cursor-pointer"
              onClick={() => handleToggleFilter(columnCar.id)}
            >
              {toggleFilterId ? (
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                  />
                </svg>
              )}
            </div>
          </div>
        </th>
        <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
          <div className="flex">
            <div className="flex cursor-default">Fullname</div>
            <div
              className="ml-2 relative top-1 cursor-pointer"
              onClick={() => handleToggleFilter(columnCar.marca)}
            >
              <div>
                {toggleFilterMarca ? (
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </th>
        <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
          <div className="flex">
            <div className="cursor-default">email</div>
            <div
              className="ml-2 relative top-1 cursor-pointer"
              onClick={() => handleToggleFilter(columnCar.modelo)}
            >
              {toggleFilterModelo ? (
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                  />
                </svg>
              )}
            </div>
          </div>
        </th>
        <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
          <div className="cursor-default">Status</div>
        </th>
        <th className="py-4 px-4 font-medium text-black dark:text-white">
          <div className="cursor-default">Actions</div>
        </th>
      </tr>
    </thead>
  );
};

export default Header;
