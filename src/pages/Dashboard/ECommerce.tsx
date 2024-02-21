import CardFour from '../../components/CardFour.tsx';
import CardOne from '../../components/CardOne.tsx';

import CardPqs from '../../components/CardPqs.tsx';
/* import CardThree from '../../components/CardThree.tsx';
import CardTwo from '../../components/CardTwo.tsx';
import ChartOne from '../../components/ChartOne.tsx'; */
import DailyUsers from '../../components/DailyUsers.tsx';
/* import ChartThree from '../../components/ChartThree.tsx';
import ChartTwo from '../../components/ChartTwo.tsx';
import ChatCard from '../../components/ChatCard.tsx';
import MapOne from '../../components/MapOne.tsx'; */
import TableOne from '../../components/table/tableOne/TableOne.tsx';

const ECommerce = (props: { token: string | null }) => {
  return (
    props.token &&
    <>
      <div className="col-span-12 xl:col-span-12">
        <CardPqs />
        {/*  <CardTwo />
        <CardThree />
        <CardFour /> */}
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-6">
          <DailyUsers />

        </div>
        <div className="col-span-12 xl:col-span-6">
          <DailyUsers />

        </div>

        {/*    <ChartTwo />
        <ChartThree />
        <MapOne /> */}
        <div className="col-span-12 xl:col-span-12">
          <TableOne />
        </div>
        {/*         <ChatCard /> */}
      </div>
    </>
  );
};

export default ECommerce;
