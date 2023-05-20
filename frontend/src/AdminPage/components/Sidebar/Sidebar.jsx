import "./sidebar.scss";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CabinIcon from "@mui/icons-material/Cabin";
import { Link } from "react-router-dom";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import { logo } from "../../../assets/images";
import * as actions from "../../../store/actions";
import { useDispatch } from "react-redux";
import GiteIcon from "@mui/icons-material/Gite";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="sidebarr">
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
              width: "100px",
              height: "40px",
              objectFit: "cover",
            }}
          />
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Người dùng</span>
            </li>
          </Link>
          <Link to="/realestatesale" style={{ textDecoration: "none" }}>
            <li>
              <GiteIcon className="icon" />
              <span>Nhà đất bán</span>
            </li>
          </Link>
          <Link to="/realestaterent" style={{ textDecoration: "none" }}>
            <li>
              <CabinIcon className="icon" />
              <span>Nhà đất cho thuê</span>
            </li>
          </Link>
          <Link to="/auction-approval" style={{ textDecoration: "none" }}>
            <li>
              <HolidayVillageIcon className="icon" />
              <span>Phê duyệt BĐS đấu giá</span>
            </li>
          </Link>
          <Link
            to="/approving-auction-register"
            style={{ textDecoration: "none" }}
          >
            <li>
              <HomeWorkIcon className="icon" />
              <span>Phê duyệt đăng kí đấu giá</span>
            </li>
          </Link>

          <p className="title">USER</p>
          <a href="/dang-nhap" onClick={() => dispatch(actions.logout())}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
