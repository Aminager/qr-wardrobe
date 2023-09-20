import { Divider } from "./Divider";

export const HeaderBlue= ({tag, tagNumber}) => {
    
    return(
        tag ? 
        <div className="flex justify-around py-3 h-20 bg-ekblue items-center flex-wrap">
            <h2 className=" text-eklightbrown text-2xl font-Jomol">EasyKeep</h2>
            <h2 className="text-eklightbrown text-2xl font-Jomol">#{tagNumber}</h2>
        </div> 
        :
        <div className="flex py-3 h-20 bg-ekblue justify-center items-center">
            <h2 className="text-eklightbrown text-2xl font-Jomol">EasyKeep</h2>
        </div>
    );
}