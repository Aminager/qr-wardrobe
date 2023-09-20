import { HeaderBrown } from "../components/HeaderBrown";

export const HomePage = () => {
    return(
        <div className="flex flex-col h-screen bg-eklightbrown">
            <HeaderBrown />
            <div className="flex h-3/5 items-center bg-black">
                <button className="btn btn-lg">Sign in as admin</button>
            </div>
        </div>
    );
}