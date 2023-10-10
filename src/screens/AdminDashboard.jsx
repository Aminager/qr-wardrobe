import { useLoaderData } from "react-router-dom";
import { HeaderBrown } from "../components/HeaderBrown";
import { TagTable } from "../components/TagTable";
import { getTags } from "../utils/API";

  const org = sessionStorage.getItem("org");

  export const AdminDashboardLoader = () => {
    const org = sessionStorage.getItem("org");
    const tags = getTags(org);
    return tags;
  };

export const AdminDashboard = () => {
  const tags = useLoaderData();
  return (
    <div className="flex flex-col h-screen bg-eklightbrown ">
      <HeaderBrown />
      <TagTable org={org} data={tags} />
    </div>
  );
};
