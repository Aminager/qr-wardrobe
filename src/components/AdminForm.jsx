import { useNavigate } from "react-router-dom";
import { authAdmin } from "../utils/API";
import { useState } from "react";

export const AdminForm = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    authAdmin(
      document.getElementById("user_input").value,
      document.getElementById("pass_input").value
    ).then((res) => {
      sessionStorage.setItem("org", res["org"]);
      res["success"] === 1 ? navigate("/admin-dashboard/") : setShowAlert(true);
    });
  };

  return (
    <div className="flex flex-col bg-eklightbrown">
      {showAlert ? (
        <div className="alert alert-error w-3/5 self-center m-5">
          <span>Username or password incorrect</span>
        </div>
      ) : (
        <div />
      )}
      <form className="flex h-full justify-center">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-ekblue">Username</span>
          </label>
          <input
            id="user_input"
            type="text"
            placeholder="e.g Hawkins"
            className="input input-bordered w-full max-w-xs bg-ekblue"
          />
          <label className="label">
            <span className="label-text text-ekblue">Password</span>
          </label>
          <input
            id="pass_input"
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
