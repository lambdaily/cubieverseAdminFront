import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { TableContext } from '../Index';
import { setColumn, setOrder } from '../../../../redux/paginationSlice';
import { ListTableData } from '../../../../utils/apiService';
import { columnUser } from '../../../../common/enums/columnUser.enum';
import { orderUser } from '../../../../common/enums/orderUser.enum';

const Header = ({ name }) => {
  const contextValue = useContext(TableContext);
  const dispatch = useDispatch();

  if (!contextValue) {
    throw new Error('TableContext.Provide not found');
  }
  const {
    setOrderBy,
    setData,
    setPages,
    setToggleOrderColumn0,
    setToggleOrderColumn1,
    setToggleOrderColumn2,
    setToggleOrderColumn3,
    toggleOrderColumn0,
    toggleOrderColumn1,
    toggleOrderColumn2,
    toggleOrderColumn3,
    pageEvent,
    headerData,
  } = contextValue;

  const handleToggleFilter = async (
    column: number,
    columnName: string,
  ): Promise<void> => {
    let limit = 10;
    let order = orderUser.asc;
    let columna: string = 'id';

    dispatch(setColumn(columnName));
    dispatch(setOrder(columnName));
    switch (column) {
      case 0:
        setToggleOrderColumn0(!toggleOrderColumn0);
        setToggleOrderColumn1(false);
        setToggleOrderColumn2(false);
        setToggleOrderColumn3(false);
        headerData[column].toggleVal = !toggleOrderColumn0;
        columna = columnUser.id;

        !toggleOrderColumn0
          ? (order = orderUser.desc)
          : (order = orderUser.asc);
        dispatch(setOrder(order));
        break;

      case 1:
        setToggleOrderColumn0(false);
        setToggleOrderColumn1(!toggleOrderColumn1);
        setToggleOrderColumn2(false);
        setToggleOrderColumn3(false);
        headerData[column].toggleVal = !toggleOrderColumn1;

        !toggleOrderColumn1
          ? (columna = columnUser.id)
          : (columna = columnUser.first_name);
        !toggleOrderColumn1
          ? (order = orderUser.desc)
          : (order = orderUser.asc);
        dispatch(setOrder(order));
        break;

      case 2:
        setToggleOrderColumn0(false);
        setToggleOrderColumn1(false);
        setToggleOrderColumn2(!toggleOrderColumn2);
        setToggleOrderColumn3(false);
        headerData[column].toggleVal = !toggleOrderColumn2;
        !toggleOrderColumn2
          ? (columna = columnUser.id)
          : (columna = columnUser.first_name);
        !toggleOrderColumn2
          ? (order = orderUser.desc)
          : (order = orderUser.asc);
        dispatch(setOrder(order));
        break;

      case 3:
        setToggleOrderColumn0(false);
        setToggleOrderColumn1(false);
        setToggleOrderColumn2(false);
        setToggleOrderColumn3(!toggleOrderColumn3);
        headerData[column].toggleVal = !toggleOrderColumn3;
        !toggleOrderColumn3
          ? (columna = columnUser.id)
          : (columna = columnUser.email);
        !toggleOrderColumn3
          ? (order = orderUser.desc)
          : (order = orderUser.asc);
        dispatch(setOrder(order));
        break;

      default:
        break;
    }

    const { data, metadata } = await ListTableData(
      name,
      limit,
      order,
      columna,
      pageEvent - 1,
      'GET',
      {},
    );

    setOrderBy(columna);
    setData(data);
    setPages(metadata.pages);
  };

  return (
    <thead className="select-none">
      <tr className="bg-gray-2 text-left dark:bg-meta-4">
        {headerData &&
          headerData.map(
            (col) =>
              col && (
                <th
                  key={Math.random() + col.columnNum}
                  className={`min-w-[${col.columnNum === 0 ? '110' : '220'}px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11`}
                >
                  <div className="flex">
                    <div className="cursor-default">{col.columnName}</div>
                    <div
                      className="ml-2 relative top-1 cursor-pointer"
                      onClick={() =>
                        handleToggleFilter(col.columnNum, col.columnNameDB)
                      }
                    >
                      {col.toggleVal ? (
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
              ),
          )}

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
