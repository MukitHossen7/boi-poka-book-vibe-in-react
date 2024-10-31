import bannerImg from "../../assets/books.jpg";
const Banner = () => {
  return (
    <div className="pt-10">
      <div className="hero bg-base-200 rounded-xl py-20 px-16">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-full lg:w-1/2">
            <img src={bannerImg} className="rounded-xl" />
          </div>
          <div className="w-full lg:w-1/2 space-y-10 row-h">
            <h1 className="text-5xl font-bold">
              Books to freshen up your bookshelf
            </h1>

            <button className="btn bg-[#23BE0A] font-bold text-white hover:text-black">
              View The List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
