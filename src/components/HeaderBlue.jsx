import { useNavigate } from "react-router-dom";

export const HeaderBlue = ({ tag, org, tagNumber }) => {
  const navigate = useNavigate();
  return tag ? (
    <div className="flex justify-around py-3 h-20 bg-ekblue items-center flex-wrap">
      <h2 className="text-eklightbrown text-2xl font-Jomol">{org}</h2>
      <h2 className="text-eklightbrown text-2xl font-Jomol">#{tagNumber}</h2>
    </div>
  ) : (
    <div className="flex py-3 h-20 bg-ekblue justify-center items-center">
      <h2
        onClick={() => navigate("/")}
        className=" text-eklightbrown text-2xl font-Jomol"
      >
        EasyKeep
      </h2>
    </div>
  );
};
