import { useEffect, useState } from "react";
import { HeaderBlue } from "../components/HeaderBlue";
import { SignInButtonGroup } from "../components/SignInButtonGroup";
import { useNavigate, useParams } from "react-router-dom";
import { SignInWithUsername } from "../components/SignInWithUsername";
import { getTagInfo } from "../utils/API";

export const UserSignInPage = () => {
  const { org, tagid } = useParams();
  const [signInUsername, setSignInUsername] = useState(false);
  const [alreadyAuth, setAlreadyAuth] = useState(false);

  useEffect(() => {
    getTagInfo(org, tagid).then((res) => {
      res["status"] === 1 ? setAlreadyAuth(true) : setAlreadyAuth(false);
    });
  }, [org, tagid]);

  return (
    <div className="flex flex-col h-screen bg-eklightblue">
      <HeaderBlue tag org={org} tagNumber={tagid} />
      {alreadyAuth ? (
        <span className="text-eklightbrown text-3xl self-center">
          This tag is already authorized
        </span>
      ) : signInUsername ? (
        <SignInWithUsername org={org} tagid={tagid} />
      ) : (
        <SignInButtonGroup
          setSignInUsername={setSignInUsername}
          org={org}
          tagid={tagid}
        />
      )}
    </div>
  );
};
