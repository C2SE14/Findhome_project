import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PlaceIcon from "@mui/icons-material/Place";
import { Link } from "react-router-dom";
import TourIcon from "@mui/icons-material/Tour";
import HotelIcon from "@mui/icons-material/Hotel";
import { logo } from "../../../assets/images";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={logo}
            alt=""
            style={{
              width: "40px",
              height: "40px",
              objectFit: "cover",
              borderRadius: "50%",
              border: "1px solid #6439ff",
            }}
          />
          <span className="logo">TravelCaps</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/admin" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Home</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/admin/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Người dùng</span>
            </li>
          </Link>
          <Link to="/admin/places" style={{ textDecoration: "none" }}>
            <li>
              <PlaceIcon className="icon" />
              <span>Địa điểm</span>
            </li>
          </Link>
          <Link to="/admin/hotels" style={{ textDecoration: "none" }}>
            <li>
              <HotelIcon className="icon" />
              <span>Khách sạn</span>
            </li>
          </Link>
          <Link to="/admin/tours" style={{ textDecoration: "none" }}>
            <li>
              <TourIcon className="icon" />
              <span>Tours du lịch</span>
            </li>
          </Link>

          <p className="title">USER</p>
          <li onClick>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;