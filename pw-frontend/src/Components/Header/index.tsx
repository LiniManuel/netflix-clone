import {
  Avatar,
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
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
      <Flex alignItems={"center"}>
        <Menu>
          <MenuButton
            as={Button}
            rounded={"full"}
            variant={"link"}
            cursor={"pointer"}
            backgroudColor="black"
            minW={0}
          >
            <Avatar
              size={"sm"}
              src={
                "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
              }
            />
          </MenuButton>
          <MenuList flexDirection="row">
            <MenuItem onClick={Logout}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </header>
  );
};

export default Header;
