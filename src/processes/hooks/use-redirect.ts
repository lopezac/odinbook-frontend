import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "shared/hooks";

export const useRedirect = (state: "authorized" | "unauthorized") => {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useSessionStorage("access-token");

  useEffect(() => {
    if (state === "unauthorized" && !accessToken) {
      navigate("/sign-in");
    } else if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate, state]);
};
