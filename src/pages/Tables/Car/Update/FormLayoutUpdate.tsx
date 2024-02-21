import Breadcrumb from '../../../../components/Breadcrumb';
import CarForm from '../../../../components/cars/CarFrom';
import { useLocation } from 'react-router-dom';


const FormLayoutUpdate = (props: { token: string | null }) => {

  const location = useLocation();
  console.log('location', location.pathname)
  // agarrar el path actual donde esta posicionado el usuario
  // /modify/cars  or  /create/new

  // agregar un useState para... de acuerdo al path, usar true o false


  
  return (
    props.token && <>
      <Breadcrumb pageName="FormLayoutupdate" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Update Car Form
              </h3>
            </div>
            <CarForm isUpdateForm={true}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormLayoutUpdate;