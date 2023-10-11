import { useState } from "react";
import { resetTag } from "../utils/API";

export const TagTable = ({ org, data, updateData }) => {
  const [loading, setLoading] = useState(0);
  const handleReset = (tag) => {
    setLoading(tag);

    resetTag(org, tag)
      .then((res) => {
        setTimeout(
          () => (res["success"] === 1 ? setLoading(-1) : setLoading(-1)),
          700
        );
      })
      .then(updateData);
  };

  return (
    <div className="h-5/6 w-11/12 bg-ekblue overflow-x-auto place-self-center my-6 rounded-md">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Tag</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr key={i}>
                <th>{item[0]}</th>
                <td>{item[1]}</td>
                <td>{item[2] === 1 ? "Authorized" : "Empty"}</td>
                <th>
                  {loading === item[0] ? (
                    <span className="loading loading-ring loading-sm"></span>
                  ) : (
                    <button
                      onClick={() => handleReset(item[0])}
                      className="btn btn-sm btn-error"
                    >
                      Reset
                    </button>
                  )}
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
