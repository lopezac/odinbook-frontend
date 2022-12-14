import { useState } from "react";
import { BsMessenger, BsBellFill, BsFillDoorOpenFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { AiFillHome, AiOutlineRight } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import {
  Layout,
  Link,
  AvatarImg,
  SmallImg,
  Para,
  DropdownMenu,
  CircleIcon,
  BigRectangleIcon,
} from "shared/ui";
import { useViewerModel } from "entities/viewer";
import { AuthLogout } from "features/auth/logout";
import { SmallHeader, MainHeader } from "./styled";

export const Header = () => {
  const logout = AuthLogout();
  const viewerModel = useViewerModel();
  const viewer = viewerModel.useViewer();
  const [showMenu, setShowMenu] = useState(false);

  if (!viewer) return <p>Loading</p>;
  return (
    <Layout.Header>
      <Link to="/">
        <SmallImg photoUrl={require("assets/facebook.png")} />
      </Link>

      <MainHeader style={{ gap: "5px" }}>
        <Link to="/">
          <BigRectangleIcon>
            <AiFillHome />
          </BigRectangleIcon>
        </Link>
        <Link to="/users">
          <BigRectangleIcon>
            <FaUsers />
          </BigRectangleIcon>
        </Link>
      </MainHeader>

      <SmallHeader>
        <Link to={`/chats`}>
          <CircleIcon>
            <BsMessenger />
          </CircleIcon>
        </Link>
        <Link to={`/notifications`}>
          <CircleIcon>
            <BsBellFill />
          </CircleIcon>
        </Link>
        <div style={{ position: "relative" }}>
          <AvatarImg
            photoUrl={viewer.picture}
            size="small"
            onClick={() => setShowMenu(!showMenu)}
          />
          {showMenu && (
            <DropdownMenu>
              <div style={{ display: "flex", gap: "5px" }}>
                <AvatarImg photoUrl={viewer.picture} size="small" />
                <Para>
                  {viewer.firstName} {viewer.lastName}
                </Para>
              </div>

              <SmallHeader>
                <CircleIcon>
                  <BsFillDoorOpenFill
                    style={{ cursor: "pointer" }}
                    onClick={logout}
                  />
                </CircleIcon>
                <Para>Log Out</Para>
                <AiOutlineRight />
              </SmallHeader>

              <SmallHeader>
                <Link to="/settings">
                  <CircleIcon>
                    <IoSettingsSharp />
                  </CircleIcon>
                </Link>
                <Para>Settings</Para>
                <AiOutlineRight />
              </SmallHeader>
            </DropdownMenu>
          )}
        </div>
      </SmallHeader>
    </Layout.Header>
  );
};
