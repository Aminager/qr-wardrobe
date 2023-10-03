import { useParams } from "react-router-dom";
import { HeaderBlue } from "../components/HeaderBlue";

export const UserSignInPage = () => {
  const { org, tagid } = useParams();
  const handleSignBankId = () => {};

  const handleSignUsername = () => {};

  return (
    <div className="flex flex-col h-screen bg-eklightblue">
      <HeaderBlue tag org={org} tagNumber={tagid} />
      <div className="flex flex-col h-3/5 justify-center items-center gap-3">
        <button
          onClick={() => handleSignBankId}
          className="btn btn-neutral btn-lg w-1/2 text-md"
        >
          Sign in with Bank ID
        </button>
        <button
          onClick={() => handleSignUsername}
          className="btn btn-neutral btn-lg w-1/2 text-md"
        >
          Sign in with username
        </button>
      </div>
    </div>
  );
};
