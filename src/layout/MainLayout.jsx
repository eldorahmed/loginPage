//rrd imports
import { Outlet } from "react-router-dom";
//components
import Navbar from "../components/Navbar";
import { Flex } from "antd";

const style = {
  container: {
    width: "100%",
    minHeight: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eef6fb",
    padding: "25px",
  },
};

function MainLayout() {
  return (
    <Flex style={{ userSelect: "none", width: "100%" }}>
      <header style={{ width: "300px " }}>
        <Navbar />
      </header>
      <main style={style.container}>
        <Outlet />
      </main>
      <footer></footer>
    </Flex>
  );
}

export default MainLayout;
