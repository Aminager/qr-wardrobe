import { useNavigate } from "react-router-dom";
import { SignInForm } from "./SignInForm";
import { useState } from "react";
import { SignUpForm } from "./SignUpForm";

export const SignInWithUsername = ({ org, tagid }) => {
  const navigate = useNavigate();
  const [signUp, setSignUp] = useState(false);

  const handleSignUp = () => {
    setSignUp(true);
  };

  return (
    <div className="flex flex-col">
      {signUp ? (
        <SignUpForm org={org} tagid={tagid} />
      ) : (
        <div className=" justify-self-center self-center">
          <SignInForm org={org} tagid={tagid} />
          <button onClick={handleSignUp} className="btn btn-outline">
            Don't have an account? Sign up here
          </button>
        </div>
      )}
    </div>
  );
};
