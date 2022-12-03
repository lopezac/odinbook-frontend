import { H2, Link } from "shared/ui";
import { UserPhotosList } from "widgets/user";

export const ProfileSidebar = () => {
  return (
    <div>
      <div>
        <div>
          <H2>Photos</H2>
          <Link to={`photos`}>See all photos</Link>
        </div>
        <div>
          <UserPhotosList limit={8} />
        </div>
      </div>
    </div>
  );
};
