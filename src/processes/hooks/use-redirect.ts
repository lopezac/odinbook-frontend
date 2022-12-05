import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMemoryStore } from "shared/hooks";

export const useRedirect = (state: "authorized" | "unauthorized") => {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useMemoryStore("access-token");
  const [user, setUser] = useMemoryStore("user");

  useEffect(() => {
    if (state === "unauthorized" && (!accessToken || !user)) {
      navigate("/sign-in");
    } else if (state === "authorized" && accessToken && user) {
      navigate("/");
    }
  }, [accessToken, state, user]);
};
