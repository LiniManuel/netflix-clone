import React, { ReactElement } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { removeTokenCookies } from "../../utils/authCookies";
import "./styles.css";

interface Props {
  black: boolean;
}

const Header = ({ black }: Props): ReactElement => {
  const navigate = useNavigate();

  const Logout = () => {
    removeTokenCookies();
    navigate("/");
  };
  return (
    <header className={black ? "black" : ""}>
      <div className="logo">
        <img src="/images/Logonetflix.png" />
      </div>
      <nav>
        <ul>
          <li style={{ marginRight: "25px" }}>Home</li>
          <li style={{ marginRight: "25px" }}>Serie Tv</li>
          <li style={{ marginRight: "25px" }}>Film</li>
          <li style={{ marginRight: "25px" }}>Nuovi e popolari</li>
          <li>La mia lista</li>
        </ul>
      </nav>
      <div className="userIcon">
        <img src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png" />
        <IoIosArrowDown
          onClick={Logout}
          cursor="pointer"
          style={{ marginLeft: "10px" }}
        />
      </div>
    </header>
  );
};

export default Header;
