import { useLoaderData } from "react-router-dom";
import { HeaderBrown } from "../components/HeaderBrown";
import { TagTable } from "../components/TagTable";
import { getTags } from "../utils/API";
import { useState } from "react";
import { TagTracker } from "../components/TagTracker";

const org = sessionStorage.getItem("org");

export const AdminDashboardLoader = () => {
  const org = sessionStorage.getItem("org");
  const tags = getTags(org);
  return tags;
};

export const AdminDashboard = () => {
  const initTags = useLoaderData();
  const [tags, setTags] = useState(initTags);

  const updateTags = () => {
    getTags(org).then((res) => {
      setTags(res);
    });
  };
  return (
    <div className="flex flex-col h-screen bg-eklightbrown ">
      <HeaderBrown />
      <TagTracker data={tags} updateData={updateTags} />
      <TagTable org={org} data={tags} updateData={updateTags} />
    </div>
  );
};
