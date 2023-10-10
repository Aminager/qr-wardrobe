import { useNavigate } from "react-router-dom";
import { authUser } from "../utils/API";
import { useState } from "react";
import { hashPassword } from "../utils/Crypt";

export const SignInWithUsername = ({ org, tagid }) => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  const handleSignUp = () => {
    navigate("/sign-up");
  };

  const submitForm = (e) => {
    e.preventDefault();
    authUser(
      document.getElementById("user_name_input").value,
      hashPassword(document.getElementById("user_pass_input").value)
    ).then((res) => {
      sessionStorage.setItem("org", res["org"]);
      res["success"] === 1
        ? navigate(`/${org}/${tagid}/?from=sign&type=username`)
        : setShowAlert(true);
    });
  };

  return (
    <div className="flex flex-col">
      <form className="flex h-full justify-center items-center">
        <div className="form-control">
          {showAlert ? (
            <div className="alert alert-error self-center m-5">
              <span>Username or password incorrect</span>
            </div>
          ) : (
            <div />
          )}
          <label className="label">
            <span>Username</span>
          </label>
          <input
            id="user_name_input"
            type="text"
            placeholder="e.g William Hawkins"
            className="input input-bordered w-full max-w-xs bg-ekblue"
          />
          <label className="label">
            <span>Password</span>
          </label>
          <input
            id="user_pass_input"
            type="password"
            className="input input-bordered w-full max-w-xs bg-ekblue"
          />
          <button
            onClick={submitForm}
            className="btn btn-md my-5 border-none bg-ekblue"
          >
            Log in
          </button>
        </div>
      </form>
      <button
        onClick={handleSignUp}
        className="btn btn-outline w-1/5 justify-self-center self-center"
      >
        Don't have an account? Sign up here
      </button>
    </div>
  );
};
