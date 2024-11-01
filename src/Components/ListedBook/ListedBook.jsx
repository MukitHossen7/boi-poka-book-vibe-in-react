import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getReadListData } from "../../utilites/localStroageDB";
import { useEffect } from "react";

const ListedBook = () => {
  const booksData = useLoaderData();
  console.log(booksData);

  useEffect(() => {
    const readBooks = getReadListData();
    console.log(readBooks);
  }, []);

  return (
    <div className="w-11/12 mx-auto pt-10">
      <h2 className="font-bold text-3xl text-center bg-gray-200 py-6 rounded-xl">
        Books
      </h2>
      <div className="mt-20">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBook;
