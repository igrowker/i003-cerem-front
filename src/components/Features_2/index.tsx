const Features_2 = () => {
  return (
    <div className="flex flex-col lg:max-w-[90vw]">
      {" "}
      <h3 className="my-20 text-5xl font-bold text-center text-blue-950">
        We make it easy to track all data analytics
      </h3>
      <div className="flex flex-col gap-20 pb-12">
        {" "}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 lg:gap-40">
          <div className="flex flex-col items-start gap-3 max-w-[400px]">
            <img
              src="src/assets/features-2/Icon1-l.svg"
              alt="Icon"
              className="h-12"
            />
            <p className="text-2xl font-bold  text-sky-600">
              Real Time Analytics
            </p>
            <p className="pr-24 text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam quasi numquam ab praesentium? Delectus quae quas
              possimus magnam.
            </p>
            <button className="px-6 py-2 mt-4 text-white bg-purple-500 rounded-full hover:bg-purple-600">
              Learn More
            </button>
          </div>
          <div className="flex items-center">
            <img
              src="src/assets/features-2/Illustration1-r.svg"
              className="w-auto h-auto max-w-[400px]"
              alt="Illustration"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row-reverse justify-center items-center gap-10 md:gap-20 lg:gap-40">
          <div className="flex flex-col items-start gap-3 max-w-[400px] relative sm:left-12">
            <img
              src="src/assets/features-2/Icon2-r.svg"
              alt="Icon"
              className="h-12"
            />
            <p className="text-2xl font-bold  text-sky-600">Safely security</p>
            <p className="pr-24 text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam quasi numquam ab praesentium? Delectus quae quas
              possimus magnam.
            </p>
            <button className="px-6 py-2 mt-4 text-white bg-purple-500 rounded-full hover:bg-purple-600">
              Learn More
            </button>
          </div>
          <div className="flex items-center">
            <img
              src="src/assets/features-2/Illustration2-l.svg"
              className="w-auto h-auto max-w-[400px] relative right-14"
              alt="Illustration"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 lg:gap-40">
          <div className="flex flex-col items-start gap-3 max-w-[400px]">
            <img
              src="src/assets/features-2/Icon3-l.svg"
              alt="Icon"
              className="h-12"
            />
            <p className="text-2xl font-bold text-sky-600">Multiple platform</p>
            <p className="pr-24 text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam quasi numquam ab praesentium? Delectus quae quas
              possimus magnam.
            </p>
            <button className="px-6 py-2 mt-4 text-white bg-purple-500 rounded-full hover:bg-purple-600">
              Learn More
            </button>
          </div>
          <div className="flex items-center">
            <img
              src="src/assets/features-2/Illustration3-r.svg"
              className="w-auto h-auto max-w-[400px]"
              alt="Illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features_2;
