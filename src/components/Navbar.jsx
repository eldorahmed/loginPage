import { useSelector } from "react-redux";
import { Flex, Menu, Typography } from "antd";
import { Link } from "react-router-dom";
const { Title } = Typography;
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BiLogOutCircle } from "react-icons/bi";
import { IoHome } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";

const items = [
  {
    key: "grp",
    type: "group",
    children: [
      {
        key: "1",
        label: (
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <IoHome />
            Home
          </Link>
        ),
      },
      {
        key: "2",
        label: (
          <Link
            to="/about"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <FcAbout />
            About
          </Link>
        ),
      },
      {
        key: "3",
        label: (
          <Link
            to="/contact"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <FaCartArrowDown />
            Orders
          </Link>
        ),
      },
    ],
  },
];

import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfige";
import toast from "react-hot-toast";

const style = {
  img: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  },
  btn: {
    backgroundColor: "#e0a69d",
    border: "none",
    borderRadius: "20px",
    padding: "10px 20px",
    fontSize: "12px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    color: "black",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    justifyContent: "center",
  },
};

const Navbar = () => {
  const { user, TotalProduct } = useSelector((state) => state.user);

  const signOutProfile = async () => {
    await signOut(auth);
    toast.success("See you soon!");
  };

  return (
    <Flex
      vertical
      style={{
        backgroundColor: "#c3e2f1",
        height: "100vh",
        paddingTop: "10px",
        position: "sticky",
        top: 0,
        zIndex: 100,
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            justifyContent: "center",
          }}
        >
          <span>
            <img style={style.img} src={user.photoURL} alt="" />
          </span>
          <span>
            <button onClick={signOutProfile} style={style.btn} type="button">
              <BiLogOutCircle />
              Log Out
            </button>
          </span>
        </div>
        <br />
        <p
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            justifyContent: "center",
            textTransform: "capitalize",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          <FaRegUserCircle /> {user.displayName}
        </p>
        <p
          style={{
            width: "100%",
            fontSize: "10px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            justifyContent: "center",
          }}
        >
          <HiOutlineMail style={{ width: "10px" }} />
          {user.email}
        </p>
        <br />
        <Typography>
          <Title
            level={4}
            style={{
              textAlign: "center",
              fontWeight: "bold",
              letterSpacing: "3px",
            }}
          >
            My Store
          </Title>
        </Typography>
      </div>
      <Menu
        style={{
          width: "100%",
          backgroundColor: "#c3e2f1",
          letterSpacing: "2px",
          textAlign: "center",
        }}
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      />
    </Flex>
  );
};

export default Navbar;
