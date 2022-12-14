import { useState } from "react";
import { BsMessenger, BsBellFill, BsFillDoorOpenFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import {
  Layout,
  Link,
  AvatarImg,
  SmallImg,
  Para,
  DropdownMenu,
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

      <MainHeader>
        <Link to="/">
          <AiFillHome />
        </Link>
        <Link to="/users">
          <FaUsers />
        </Link>
      </MainHeader>

      <SmallHeader>
        <Link to={`/chats`}>
          <BsMessenger />
        </Link>
        <Link to={`/notifications`}>
          <BsBellFill />
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
                <BsFillDoorOpenFill
                  style={{ cursor: "pointer" }}
                  onClick={logout}
                />
                <Para>Log Out</Para>
              </SmallHeader>
              <SmallHeader>
                <Link to="/settings">
                  <IoSettingsSharp />
                </Link>
                <Para>Settings</Para>
              </SmallHeader>
            </DropdownMenu>
          )}
        </div>
      </SmallHeader>
    </Layout.Header>
  );
};
