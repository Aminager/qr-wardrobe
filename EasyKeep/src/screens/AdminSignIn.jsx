import { HeaderBrown } from "../components/HeaderBrown";

export const AdminSignInPage = () => {
  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col h-screen bg-eklightbrown">
      <HeaderBrown />
      <form className="flex justify-center">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-ekblue">Username</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs bg-ekblue"
          />
          <label className="label">
            <span className="label-text text-ekblue">Password</span>
          </label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs bg-ekblue"
          />
          <button
            onClick={submitForm}
            className="btn btn-sm my-5 border-none bg-ekblue"
          >
            hej
          </button>
        </div>
      </form>
    </div>
  );
};
