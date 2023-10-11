import { authUser, authTag, getSalt } from "../utils/API";
import { useState } from "react";
import { checkPassword, hashPassword } from "../utils/Crypt";
import { useNavigate } from "react-router-dom";

export const SignInForm = ({ org, tagid }) => {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    const name = document.getElementById("user_name_input").value;
    const pass = document.getElementById("user_pass_input").value;
    getSalt(name)
      .then((res) => res["salt"])
      .then((salt) => {
        authUser(name, pass).then((res) => {
          sessionStorage.setItem("org", res["org"]);
          if (res["success"] === 1 && checkPassword(res["pass"], salt)) {
            authTag(org, tagid, name).then((res) => {
              navigate(`/${org}/${tagid}/?from=sign&type=username&auth=true`);
            });
          } else {
            setShowAlert(true);
          }
        });
      });
  };
  return (
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
          className="input input-bordered w-full max-w-xs bg-ekblue text-eklightbrown"
        />
        <label className="label">
          <span>Password</span>
        </label>
        <input
          id="user_pass_input"
          type="password"
          className="input input-bordered w-full max-w-xs bg-ekblue text-eklightbrown"
        />
        <button
          onClick={submitForm}
          className="btn btn-md my-5 border-none bg-ekblue"
        >
          Log in
        </button>
      </div>
    </form>
  );
};
