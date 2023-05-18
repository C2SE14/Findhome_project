import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  // const auth = useSelector((state) => state.auth);
  // const { user } = auth;

  return (
    <div className="navbarAdmin">
      <div className="wrapper">
        <div className="searchAdmin">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="itemms">
          <div className="itemm">
            <LanguageOutlinedIcon className="icon" />
            Vietnamese
          </div>
          <div className="itemm">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="itemm">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="itemm">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="itemm">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="itemm">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="itemm">
            {/* <img src={user.avatar} alt="" className="avatar" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
