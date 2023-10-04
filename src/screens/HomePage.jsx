import { useNavigate } from "react-router-dom";
import { HeaderBrown } from "../components/HeaderBrown";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-eklightbrown">
      <HeaderBrown />
      <div className="flex h-full justify-center items-center">
        <button
          onClick={() => navigate("/admin-sign-in")}
          className="btn btn-neutral btn-lg"
        >
          Sign in as admin
        </button>
      </div>
    </div>
  );
};
