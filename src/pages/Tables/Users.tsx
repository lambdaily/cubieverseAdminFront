import Breadcrumb from '../../components/Breadcrumb';
import MainTable from '../../components/table/mainTable/Index';

const Tables = (props: { token: string | null }) => {
  return (
    props.token && 
    <>
      <Breadcrumb pageName="Users" />

      <div className="flex flex-col gap-10">
        <MainTable name={'user'}/>
      </div>
    </>
  );
};

export default Tables;
