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
import { SmallHeader, MenuIconRow } from "./styled";

export const AuthHeader = () => {
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

      <SmallHeader>
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
      </SmallHeader>

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
              <Link to="/me">
                <MenuIconRow>
                  <AvatarImg photoUrl={viewer.picture} size="small" />
                  <Para>
                    {viewer.firstName} {viewer.lastName}
                  </Para>
                </MenuIconRow>
              </Link>

              <MenuIconRow onClick={logout}>
                <CircleIcon>
                  <BsFillDoorOpenFill />
                </CircleIcon>
                <Para>Log Out</Para>
                <AiOutlineRight />
              </MenuIconRow>

              <Link to="/settings">
                <MenuIconRow>
                  <CircleIcon>
                    <IoSettingsSharp />
                  </CircleIcon>
                  <Para>Settings</Para>
                  <AiOutlineRight />
                </MenuIconRow>
              </Link>
            </DropdownMenu>
          )}
        </div>
      </SmallHeader>
    </Layout.Header>
  );
};
