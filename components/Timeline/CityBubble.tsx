const CityBubble = () => {
  return (
    <>
      <div className="right-timeline mb-8 flex w-full p-0 items-center md:justify-between">
        <div className="right-9/10 absolute z-20 order-1 h-3 w-3 translate-x-1/2 rounded-full bg-gray-800 shadow-xl md:right-1/2"></div>
        <div className="order-1 w-32 md:w-5/12"></div>
        <div className="order-1 w-5/12 rounded-lg bg-gray-400 px-6 py-4 shadow-xl">
          <h3 className="mb-3 text-xl font-bold text-gray-800">
            Lorem Ipsum 2
          </h3>
          <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100"></p>
        </div>
      </div>
    </>
  );
};

export default CityBubble;
