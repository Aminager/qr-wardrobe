import { useLoaderData, useParams, useSearchParams } from "react-router-dom";
import { HeaderBlue } from "../components/HeaderBlue";
import { getTagInfo } from "../utils/API";

export const UserTagPageLoader = ({ params }) => {
  const tagInfo = getTagInfo(params["org"], params["tagid"]);
  return tagInfo;
};

export const UserTagPage = () => {
  const { org, tagid } = useParams();
  const [searchParams, getSearchParams] = useSearchParams();
  const from = searchParams.get("from");
  const type = searchParams.get("type");
  const auth = searchParams.get("auth");
  const tagInfo = useLoaderData();

  const authorizedTag = (
    <div>
      <h1>Name: {tagInfo["name"]}</h1>
      <h1>Tag: {tagInfo["tag"]}</h1>
      <h1>Status: {tagInfo["status"] === 1 ? "Authorized" : "Empty"}</h1>
    </div>
  );

  const noAuthTag = <div>Please sign in</div>;

  return (
    <div className="flex flex-col h-screen bg-eklightblue">
      <HeaderBlue tag org={org} tagNumber={tagid} />
      <div className="flex flex-col h-full justify-center items-center text-3xl">
        {auth && (type === "bid" || type === "username") && from === "sign"
          ? authorizedTag
          : noAuthTag}
      </div>
    </div>
  );
};
