import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <h2>This is Rote Page</h2>
      <h2>This is Rote Page</h2>
      <h2>This is Rote Page</h2>
      <h2>This is Rote Page</h2>
      <h2>This is Rote Page</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
