import { HeaderBrown } from "../components/HeaderBrown";
import { AdminForm } from "../components/AdminForm";

export const AdminSignInPage = () => {
  return (
    <div className="flex flex-col h-screen bg-eklightbrown">
      <HeaderBrown />
      <AdminForm />
    </div>
  );
};
