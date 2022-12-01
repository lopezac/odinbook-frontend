import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMemoryStore } from "shared/hooks";

export const useRedirect = (state: "authorized" | "unauthorized") => {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useMemoryStore("access-token");

  useEffect(() => {
    if (state === "unauthorized" && !accessToken) {
      navigate("/sign-in");
    } else if (state === "authorized" && accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate, state]);
};
