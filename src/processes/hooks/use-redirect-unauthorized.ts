import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "shared/hooks";

export const useRedirectUnauthorized = () => {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useSessionStorage("access-token");

  useEffect(() => {
    if (!accessToken) navigate("/sign-in");
  }, [accessToken, navigate]);
};
