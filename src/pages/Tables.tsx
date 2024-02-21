import Breadcrumb from '../components/Breadcrumb';
import TableOne from '../components/table/tableOne/TableOne';
import TableTwo from '../components/table/tableTwo/TableTwo';
import TableFive from '../components/table/tablefive/Index';

const Tables = (props: { token: string | null }) => {
  return (
    props.token && (
      <>
        <Breadcrumb pageName="Tables" />

        <div className="flex flex-col gap-10">
          <TableOne />
          <TableTwo />
          <TableFive />
        </div>
      </>
    )
  );
};

export default Tables;
