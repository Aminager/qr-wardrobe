import { useNavigate, useParams } from "react-router-dom";
import { HeaderBlue } from "../components/HeaderBlue";
import { authTag } from "../utils/API";

export const UserSignInPage = () => {
  const { org, tagid } = useParams();
  const navigate = useNavigate();

  const handleSignBankId = () => {
    console.log(authTag(org, tagid));
    navigate(`/${org}/${tagid}/?from=sign&type=bid&auth=true`);
  };

  const handleSignUsername = () => {
    navigate(`/${org}/${tagid}/?from=sign&type=username`);
  };

  return (
    <div className="flex flex-col h-screen bg-eklightblue">
      <HeaderBlue tag org={org} tagNumber={tagid} />
      <div className="flex flex-col h-full justify-center items-center gap-3">
        <button
          onClick={() => handleSignBankId()}
          className="btn btn-neutral btn-lg w-1/2 text-md"
        >
          Sign in with Bank ID
        </button>
        <button
          onClick={() => handleSignUsername()}
          className="btn btn-neutral btn-lg w-1/2 text-md"
        >
          Sign in with username
        </button>
      </div>
    </div>
  );
};
