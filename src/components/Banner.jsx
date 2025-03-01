const Banner = () => {
  return (
    <div className="bg-slate-500 py-16 text-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-white">
        Hi there, This is Ashraful Islam
      </h2>
      <p className="text-center my-2 mx-2 lg:w-1/2 lg:mx-auto lg:text-lg mb-5">
        MERN Stack developer with the passion of creating modern applications
        and curious to learn new technologies
      </p>
      <a
        className="bg-red-700 px-5 py-2 rounded font-normal text-lg text-white text-center"
        href="#"
      >
        Download CV
      </a>
    </div>
  );
};

export default Banner;
