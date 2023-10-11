import { useState } from "react";
import { HeaderBlue } from "../components/HeaderBlue";
import { SignInButtonGroup } from "../components/SignInButtonGroup";
import { useParams } from "react-router-dom";
import { SignInWithUsername } from "../components/SignInWithUsername";

export const UserSignInPage = () => {
  const { org, tagid } = useParams();
  const [signInUsername, setSignInUsername] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-eklightblue">
      <HeaderBlue tag org={org} tagNumber={tagid} />
      {signInUsername ? (
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
