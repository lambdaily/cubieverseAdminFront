import Breadcrumb from '../../../components/Breadcrumb';
import MainTable from '../../../components/table/mainTable/Index';

const Tables = (props: { token: string | null }) => {
  return (
    props.token && 
    <>
      <Breadcrumb pageName="Cars" />

      <div className="flex flex-col gap-10">
        <MainTable name={'car'}/>
      </div>
    </>
  );
};

export default Tables;