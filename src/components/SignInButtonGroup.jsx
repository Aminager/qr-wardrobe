import { authTag } from "../utils/API";
import { useNavigate } from "react-router-dom";

export const SignInButtonGroup = ({ setSignInUsername, org, tagid }) => {
  const navigate = useNavigate();

  const handleSignBankId = () => {
    authTag(org, tagid, "Amin Alian");
    navigate(`/${org}/${tagid}/?from=sign&type=bid&auth=true`);
  };

  const handleSignUsername = () => {
    setSignInUsername(true);
    //navigate(`/${org}/${tagid}/?from=sign&type=username`);
  };
  return (
    <div className="flex flex-col h-full justify-center items-center gap-3">
      <button
        onClick={() => handleSignBankId()}
        className="btn btn-neutral btn-lg w-1/2 text-md"
      >
        Sign in with Bank ID
      </button>
      <button
        onClick={() => handleSignUsername()}
        className="btn btn-outline btn-sm w-1/2 text-md"
      >
        Sign in with username
      </button>
    </div>
  );
};
