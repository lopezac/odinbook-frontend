import { useParams } from "react-router-dom";
import { H2, Link } from "shared/ui";
import { UserPhotosList } from "widgets/user";

export const ProfileSidebar = () => {
  const { userId } = useParams();

  if (!userId) return <p>No data without user id</p>
  return (
    <div>
      <div>
        <div>
          <H2>Photos</H2>
          <Link to={`photos`}>See all photos</Link>
        </div>
        <div>
          <UserPhotosList userId={userId} />
        </div>
      </div>
    </div>
  );
};
