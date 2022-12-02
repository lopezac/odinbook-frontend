import { ViewerAvatar } from "entities/viewer";

export const ProfileHeader = () => {
  return (
    <div>
      <div>
        <div>
          <ViewerAvatar size="large" />
          <p>button change img</p>
        </div>
        <div>
          <p>Edit profile</p>
        </div>
      </div>
      <div>
        <ul>
          <li>Posts</li>
          <li>About</li>
          <li>Friends</li>
          <li>Photos</li>
          <li>Videos</li>
        </ul>
      </div>
    </div>
  );
};
