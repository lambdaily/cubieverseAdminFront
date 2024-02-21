import Breadcrumb from '../../components/Breadcrumb';
// import TableOne from '../../components/table/tableOne/TableOne';
import MainTable from '../../components/table/mainTable/Index';
// import TableTwo from '../../components/table/tableTwo/TableTwo';

const Tables = (props: { token: string | null }) => {
  return (
    props.token && 
    <>
      <Breadcrumb pageName="Roles" />

      <div className="flex flex-col gap-10">
        <MainTable name={'role'}/>
        {/*<TableOne />
        <TableTwo />*/}
      </div>
    </>
  );
};

export default Tables;
