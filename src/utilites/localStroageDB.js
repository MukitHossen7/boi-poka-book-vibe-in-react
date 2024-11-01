const getReadListData = () => {
  const getReadData = localStorage.getItem("read-list");
  if (getReadData) {
    const readDataObj = JSON.parse(getReadData);
    return readDataObj;
  } else {
    return [];
  }
};
const setReadListData = (id) => {
  const setReadData = getReadListData();
  if (setReadData.includes(id)) {
    alert("Already exist data");
  } else {
    setReadData.push(id);
    const readDataStr = JSON.stringify(setReadData);
    localStorage.setItem("read-list", readDataStr);
  }
};

const getWishListData = () => {
  const getWishData = localStorage.getItem("wish-list");
  if (getWishData) {
    const wishDataObj = JSON.parse(getWishData);
    return wishDataObj;
  } else {
    return [];
  }
};

const setWishListData = (id) => {
  const setWishData = getWishListData();
  if (setWishData.includes(id)) {
    alert("Already exist data");
  } else {
    setWishData.push(id);
    const wishDataStr = JSON.stringify(setWishData);
    localStorage.setItem("wish-list", wishDataStr);
  }
};

export { setReadListData, setWishListData, getReadListData };
