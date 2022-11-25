import { Routes, Route } from "react-router-dom";
import FeedPage from "./feed";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<FeedPage />} />
    </Routes>
  );
};
