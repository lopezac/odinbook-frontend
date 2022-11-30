import { useRedirectUnauthorized } from "processes/hooks";

const FeedPage = () => {
  useRedirectUnauthorized();
  return <div>Feed Pagoooe</div>;
};

export default FeedPage;
