import { Navigate, useNavigate } from "react-router-dom";
import { HeaderBrown } from "../components/HeaderBrown";

export const HomePage = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/admin-sign-in");
  };

  return (
    <div className="flex flex-col h-screen bg-eklightbrown">
      <HeaderBrown />
      <div className="flex h-3/5 justify-center items-center">
        <button onClick={handleOnClick} className="btn btn-neutral btn-lg">
          Sign in as admin
        </button>
      </div>
    </div>
  );
};
