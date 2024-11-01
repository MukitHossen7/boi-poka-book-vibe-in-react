import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import {
  setReadListData,
  setWishListData,
} from "../../utilites/localStroageDB";

const BookDetails = () => {
  const booksData = useLoaderData();
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = booksData.find((data) => data.bookId === id);
  const navigate = useNavigate();
  const handleBackHomePage = () => {
    navigate(-1);
  };

  const handleReadList = (id) => {
    setReadListData(id);
  };
  const handleWishList = (id) => {
    setWishListData(id);
  };
  return (
    <div className="w-11/12 mx-auto pt-10">
      <div className="hero bg-base-200 py-12 px-20 rounded-xl min-h-screen">
        <div className="flex gap-8 flex-col lg:flex-row">
          <div className="w-full lg:w-[50%]">
            <img
              src={data.image}
              className=" max-h-[800px] w-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full lg:w-[50%]">
            <h1 className="text-5xl font-bold">{data.bookName}</h1>
            <p className="font-semibold text-xl pt-5">By : {data.author}</p>
            <div>
              <div className="divider"></div>
              <p className="font-semibold text-gray-500 text-xl">
                {" "}
                {data.category}
              </p>
              <div className="divider"></div>
            </div>
            <p className="text-gray-600 font-medium">
              <span className="font-bold text-lg">Review : </span>
              {data.review}
            </p>
            <div className="flex items-center gap-4 pt-8">
              <span className="font-bold text-lg">Tag</span>
              <div className="flex flex-row gap-4">
                {data.tags.map((tag, idx) => (
                  <button
                    key={idx}
                    className="text-[#23BE0A] font-medium bg-green-100 px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
            <div className="divider"></div>
            <div className="space-y-2">
              <div className="flex items-center gap-20">
                <p className="text-lg text-gray-600 font-medium">
                  Number of Pages:
                </p>
                <h3 className="text-xl font-bold">{data.totalPages}</h3>
              </div>
              <div className="flex items-center gap-36">
                <p className="text-lg text-gray-600 font-medium">Publisher:</p>
                <h3 className="text-xl font-bold">{data.publisher}</h3>
              </div>
              <div className="flex items-center gap-20">
                <p className="text-lg text-gray-600 font-medium">
                  Year of Publishing:
                </p>
                <h3 className="text-xl font-bold">{data.yearOfPublishing}</h3>
              </div>
              <div className="flex items-center gap-44">
                <p className="text-lg text-gray-600 font-medium">Rating:</p>
                <h3 className="text-xl font-bold">{data.rating}</h3>
              </div>
            </div>
            <div className="mt-14 flex gap-4">
              <button
                onClick={() => handleReadList(bookId)}
                className="btn btn-outline text-black px-10 text-lg"
              >
                Read
              </button>
              <button
                onClick={() => handleWishList(bookId)}
                className="btn btn-info text-white font-bold px-10 "
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <button
          onClick={handleBackHomePage}
          className="btn btn-outline btn-accent"
        >
          Go To Home Pages
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
