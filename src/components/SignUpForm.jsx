import { createUser, authTag } from "../utils/API";
import { useState } from "react";
import { hashPassword } from "../utils/Crypt";
import { useNavigate } from "react-router-dom";

export const SignUpForm = ({ org, tagid }) => {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    const name = document.getElementById("user_name_input").value;
    const pass = hashPassword(document.getElementById("user_pass_input").value);
    createUser(name, pass).then((res) => {
      sessionStorage.setItem("org", res["org"]);
      if (res["success"] === 1) {
        authTag(org, tagid, name);

        navigate(`/${org}/${tagid}/?from=sign&type=username&auth=true`);
      } else {
        setShowAlert(true);
      }
    });
  };
  return (
    <form className="flex h-full justify-center items-center">
      <div className="form-control">
        {showAlert ? (
          <div className="alert alert-error self-center m-5">
            <span>User already exists</span>
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
          Sign up
        </button>
      </div>
    </form>
  );
};
