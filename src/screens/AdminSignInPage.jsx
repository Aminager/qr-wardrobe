import { useNavigate } from "react-router-dom";
import { HeaderBrown } from "../components/HeaderBrown";

export const AdminSignInPage = () => {
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    navigate("/auth/vg/1");
  };

  return (
    <div className="flex flex-col h-screen bg-eklightbrown">
      <HeaderBrown />
      <form className="flex h-full justify-center">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-ekblue">Username</span>
          </label>
          <input
            type="text"
            placeholder="e.g Hawkins"
            className="input input-bordered w-full max-w-xs bg-ekblue"
          />
          <label className="label">
            <span className="label-text text-ekblue">Password</span>
          </label>
          <input
            type="password"
            placeholder="e.g abc123"
            className="input input-bordered w-full max-w-xs bg-ekblue"
          />
          <button
            onClick={submitForm}
            className="btn btn-sm my-5 border-none bg-ekblue"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};
