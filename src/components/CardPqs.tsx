const CardPqs = () => {
  return (
    <div className="h-56 rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">

      <div className="flex items-center gap-8">
        <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-[#3a506b]  dark:bg-meta-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-camera">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
            <circle cx="12" cy="13" r="4"></circle>
          </svg>

        </div>
        <h2 className="text-lg"> Photo Quest </h2>
      </div>


      <div className="mt-4 flex items-end justify-center">
        <div>
          <h1 className="text-title-xxl font-bold text-black dark:text-white underline">
            107
          </h1>

        </div>

      </div>
    </div>
  );
};

export default CardPqs;
